"use client";

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import logo_white from "@/public/user.svg";
import Image from 'next/image';
import { useState } from 'react';
import ConfirmModal from '../successModal/ConfirmModal';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/actions/user/action';
import toast from 'react-hot-toast';
import { uploadProfile } from '@/app/actions/profile/action';
import Loader from '../loader/Loader';

export const Profile = ({ user }) => {

    const { push } = useRouter();
    const router = useRouter();

    const [isConfirm, setIsConfirm] = useState(false);
    const [file, setFile] = useState(null);
    const [pending, setPending] = useState(false);

    const handleLogout = async () => {
        await logout();
        toast.success("Logged Out Successfully");
        push("/signin");
    }

    const handleForm = async () => {

        if (file === null) {
            return toast.error("Please choose image!");
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_IMAGE_UPLOAD_PRESET);

        // upload image to cloudinary::begin
        try {
            setPending(true);
            const cloud_res = await fetch(`https://api.cloudinary.com/v1_1/dn5zwro9j/image/upload`, {
                method: "POST",
                body: formData
            });

            const cloud_data = await cloud_res.json();

            if (cloud_res.ok) {
                //   save in database::begin
                try {

                    const formData = new FormData();
                    formData.append("public_id", cloud_data.public_id);
                    formData.append("url", cloud_data.url);

                    const response = await uploadProfile(formData);

                    if (response.status === 201) {
                        router.refresh();
                        setFile(null);
                        setPending(false);
                        return toast.success(response.message);
                    } else {
                        setPending(false);
                        throw new Error("Faild to upload profile image!");
                    }
                } catch (error) {
                    setPending(false);
                    console.log(error);
                }
                //   save in database::end
            } else {
                setPending(false);
                throw new Error("Faild to upload profile image!");
            }

        } catch (error) {
            setPending(false);
            console.log(error);
        }
        // upload image to cloudinary::end
    };

    return (
        <>
            <Breadcrumb title="Profile" link="/dashboard" />
            {
                isConfirm
                    ?
                    <ConfirmModal
                        title="Are you sure  you want to log out?"
                        redirect
                        setIsSuccess={setIsConfirm}
                        handleFunction={handleLogout}
                    />
                    :
                    <></>
            }
            {
                pending ? <Loader /> : <></>
            }
            <section className="profile-section">
                <div className="profile-wrapper">
                    <div className="profile-wrapper-childs">
                        {
                            file === null
                                ?
                                <Image
                                    src={user?.url === null ? logo_white : user?.url}
                                    width={100}
                                    height={100}
                                    alt="choosen file"
                                    className={user?.url === null ? "image-pre" : ""}
                                    unoptimized
                                />
                                :
                                <Image
                                    src={URL.createObjectURL(file)}
                                    width={100}
                                    height={100}
                                    alt="file"
                                    unoptimized
                                />

                        }
                    </div>
                    <div className="profile-wrapper-childs">
                        <div className="profile-image-upload">
                            <form>
                                <div className="file-upload-container">
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        <i className="fa fa-cloud-upload"></i> Choose Profile
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept=".png, .jpg, .jpeg, .gif"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                    <div id="file-upload-filename"></div>
                                </div>
                            </form>
                        </div>
                        {
                            file === null
                                ?
                                <></>
                                :
                                <div className="upload_btn">
                                    <button onClick={() => handleForm()}>Update</button>
                                </div>
                        }
                    </div>
                </div>
                <div className="profile-info">
                    <h3>{user?.username}</h3>
                    <p>Invite Code: {user?.invitation_code}</p>
                </div>
                <div className="submit-btn">
                    <button onClick={() => setIsConfirm(true)} className="btn global-primary-btn">LOG OUT</button>
                </div>
            </section>
        </>
    )
}
