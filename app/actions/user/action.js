"use server";

import { revalidatePath } from "next/cache";
import { Commission } from "@/modals/Commission";
import { User } from "@/modals/User";
import { connectToDB } from "@/utils/connection";
import generateReferralCode from "@/utils/generateRefCode";
import generateSecurityCode from "@/utils/generateSecurityCode";
import generateUniqueId from "@/utils/generateid";
import bcrypt from "bcryptjs";
import { auth, signIn, signOut } from "@/app/auth";
import { Withdrawal } from "@/modals/Withdrawal";
import { Setting } from "@/modals/Setting";
import { AccountChange } from "@/modals/AccountChange";

export const authenticate = async (formData) => {

    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return {
                message: `Invalid username or password!, try again!`,
                status: 404,
                type: "danger"
            };
        }
        throw err;
    }
};

export const logout = async () => {
    try {
        await signOut();

        return {
            message: "Logged Out Successfully",
            status: 201,
            type: "success"
        };
    } catch (err) {
        console.log(err)
    }
};

export const createUser = async (formData) => {

    try {
        connectToDB();

        const {
            // id,
            username,
            role,
            // parent_id,
            phone_number,
            // balance,
            // daily_available_order,
            // today_order,
            // today_commission,
            // parent_user,
            ref_code,
            // status,
            // membership_level,
            // froze_amount,
            // wallet_address,
            password,
            withdrawal_pin,
            // network_type,
            // match_min,
            // match_max,
            // allow_withdrawal,
            // security_code,
        } = Object.fromEntries(formData);

        const isUser = await User.findOne({ username: username });

        if (phone_number?.length < 8 || phone_number?.length > 15) {
            return {
                message: 'Phone number must be between 8 and 15 digits long',
                status: 400,
                type: "danger"
            };
        }

        if (isUser) return {
            message: `'${username}' Username already taken, please select different username`,
            status: 404,
            type: "danger"
        };

        const isPhone = await User.findOne({ phone_number: phone_number });

        if (isPhone) return {
            message: `'${phone_number}' This phone number is already used, Please try with different phone number!`,
            status: 404,
            type: "danger"
        };

        const isValidInvitation = await User.findOne({ invitation_code: ref_code });

        if (!isValidInvitation) return {
            message: `Invalid referral code, Try again!`,
            status: 404,
            type: "danger"
        };

        const settings =  await Setting.findOne();
        
        if (!settings) return {
            message: `Settings not found`,
            status: 404,
            type: "danger"
        };

        const hasedPassword = await bcrypt.hash(password, 10);

        // generating unique values
        const id = await generateUniqueId();
        const security_code = await generateSecurityCode();
        const invitation_code = await generateReferralCode();


        const membership_info = await Commission.findOne({ is_default: true });
        if (!membership_info) return {
            message: "Membership not found!",
            status: 404,
            type: "danger"
        };

        const parentInfo = await User.findOne({ invitation_code: ref_code });
        if (!parentInfo) return {
            message: "Invalid parent id!",
            status: 404,
            type: "danger"
        };

        const newUser = new User({
            id,
            username,
            role,
            parent_id: parentInfo.id,
            phone_number,
            balance: 0,
            daily_available_order: membership_info.order_quantity,
            today_order: 0,
            today_commission: 0,
            parent_user: parentInfo.username,
            invitation_code,
            status: true,
            membership_level: membership_info?.membership_name,
            froze_amount: 0,
            wallet_address: null,
            withdrawal_pin: withdrawal_pin,
            network_type: null,
            match_min: settings?.matching_range_min,
            match_max: settings?.matching_range_max,
            allow_withdrawal: true,
            security_code,
            password: hasedPassword,
            connected_agent_id: parentInfo?.id
        });

        const newRegisteredUser = await newUser.save();

        // registration gift amount
        const setting = await Setting.findOne();
        await User.findByIdAndUpdate(newRegisteredUser?._id, {
            balance: newRegisteredUser?.balance + setting?.gift_amount
        });

        const finalRegisteredGift = newRegisteredUser?.balance + setting?.gift_amount;

        await AccountChange.create({
            username: newRegisteredUser?.username,
            amount: newRegisteredUser?.balance,
            after_operation: finalRegisteredGift,
            account_type: "registrationGift"
        });

        revalidatePath("/signup");
        return {
            message: "Account created successfully, thank you for joining us!",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}

export const createWallet = async (formData) => {
    const { wallet_name, wallet_address, network_type, currency, id } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const authenticatedUser = await User.findById(id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const updateFields = {
            wallet_name,
            wallet_address,
            network_type,
            currency
        }

        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(authenticatedUser?._id, updateFields);

        return {
            message: "Wallet information saved successfully",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}

export const withdrawal = async (formData) => {
    const { amount, withdrawal_pin } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const { user } = await auth();

        if (!user) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        // check withdrawal allow or not
        const setting = await Setting.findOne();
        const isTimeAllow = setting?.is_withdrawal_allow;

        if (!isTimeAllow) return {
            message: `Withdrawal can not be proceed at this time, Please contact customer service.`,
            status: 404,
            type: "danger"
        };

        const membership = await Commission.findOne({ membership_name: authenticatedUser?.membership_level });

        if (authenticatedUser?.today_order < membership?.withdrawal_needed_order) return {
            message: `Complete your jouney first to withdrawal`,
            status: 404,
            type: "danger"
        };

        if (authenticatedUser?.balance < Number(amount)) return {
            message: `Your account has $${authenticatedUser?.balance} and you have entered $${amount} for withdrawal. Insufficient balance!`,
            status: 404,
            type: "danger"
        };

        if (authenticatedUser?.withdrawal_pin !== Number(withdrawal_pin)) return {
            message: `Incorrect withdrawal password`,
            status: 404,
            type: "danger"
        };

        if (membership?.min_withdrawal_amount > Number(amount)) {
            return {
                message: `The withdrawal amount must be at least ${membership?.min_withdrawal_amount}.`,
                status: 404,
                type: "danger"
            };
        }

        if (membership?.max_withdrawal_amount < Number(amount)) {
            return {
                message: `Maximum withdrawal amount is ${membership?.max_withdrawal_amount}.`,
                status: 404,
                type: "danger"
            };
        }

        const calAmount = authenticatedUser?.balance - Number(amount);

        if (authenticatedUser?.withdrawal === null) {
            const walletData = {
                id: authenticatedUser?._id,
                username: authenticatedUser?.username,
                phone_number: authenticatedUser?.phone_number,
                wallet_name: authenticatedUser?.wallet_name,
                withdrawal_amount: Number(amount),
                wallet_address: authenticatedUser?.wallet_address,
                network_type: authenticatedUser?.network_type,
                currency: authenticatedUser?.currency,
                status: "pending"
            };

            const withdrawal = await Withdrawal.create({
                wallet: [walletData]
            });

            await User.findByIdAndUpdate(authenticatedUser?._id, {
                withdrawal: withdrawal._id,
                balance: calAmount
            });

        } else {

            const withdrawals = await Withdrawal.findById(authenticatedUser?.withdrawal);
            const allWithdrawals = withdrawals?.wallet || [];

            const newObj = {
                id: authenticatedUser?._id,
                username: authenticatedUser?.username,
                phone_number: authenticatedUser?.phone_number,
                wallet_name: authenticatedUser?.wallet_name,
                withdrawal_amount: Number(amount),
                wallet_address: authenticatedUser?.wallet_address,
                network_type: authenticatedUser?.network_type,
                currency: authenticatedUser?.currency,
                status: "pending"
            }

            const updateArray = [...allWithdrawals, newObj];

            await Withdrawal.findByIdAndUpdate(authenticatedUser?.withdrawal, {
                wallet: updateArray
            });

            await User.findByIdAndUpdate(authenticatedUser?._id, {
                balance: calAmount
            });
        }

        return {
            message: "Requested for withdrawal successfully",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}

export const resetPassword = async (formData) => {
    const { old_password, new_password, confirm_password } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const { user } = await auth();

        if (!user) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const isPasswordCorrect = await bcrypt.compare(
            old_password,
            authenticatedUser?.password
        );

        if (!isPasswordCorrect) return {
            message: `Old password not match. Kindly check and try again`,
            status: 404,
            type: "danger"
        };

        if (new_password !== confirm_password) return {
            message: `Confirm the password!`,
            status: 404,
            type: "danger"
        };

        const hasedPassword = await bcrypt.hash(new_password, 10);
        const newSecurityCode = await generateSecurityCode();

        await User.findByIdAndUpdate(authenticatedUser?._id, {
            password: hasedPassword,
            security_code: newSecurityCode
        });

        return {
            message: `Password reset successfully!`,
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}

export const resetPin = async (formData) => {
    const { old_pin, new_pin, confirm_pin } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const { user } = await auth();

        if (!user) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        if (authenticatedUser?.withdrawal_pin !== Number(old_pin)) return {
            message: `Old PIN not match. Kindly check and try again`,
            status: 404,
            type: "danger"
        };

        if (new_pin !== confirm_pin) return {
            message: `Confirm PIN!`,
            status: 404,
            type: "danger"
        };

        await User.findByIdAndUpdate(authenticatedUser?._id, {
            withdrawal_pin: new_pin
        });

        return {
            message: `Withdrawal password reset successfully!`,
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}