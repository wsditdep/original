"use client";

import { logout } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SecurityCheck = ({ user, authenticatedUser }) => {
    const router = useRouter();

    const checkSecurity = async () => {
        const isBlocked = authenticatedUser?.status;
        
        if (!isBlocked) {
            await logout();
            router.push("/");
        } else if (user?.security_code !== authenticatedUser?.security_code) {
            await logout();
            router.push("/");
        }
    };

    useEffect(() => {
        checkSecurity();
    }, []);

    return null;
};

export default SecurityCheck;