"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import { validateStartJourney } from "@/app/actions/journey/action";
import { toast } from 'react-hot-toast';
import { useEffect } from "react";
import Popup from "reactjs-popup";
import SubmitJourney from "../submitJourney/SubmitJourney";


function Submit() {

    const { pending } = useFormStatus();

    return (
        <>
            <button type="submit" className={pending ? "btn global-primary-btn-validate managedDisabled" : "btn global-primary-btn-validate"}> {
                pending ?
                    <> Please wait... <i className="fa fa-spinner loading_animation"></i></>
                    :
                    `Start Explore`

            }
            </button>
            

        </>

    )
}

const ValidateJourney = () => {

    const { push, refresh } = useRouter();

    const handleForm = async () => {
        try {
            const response = await validateStartJourney();

            if (response.status === 201) {
                push('/dashboard/journey/submitJourney');
                return;
            } else if (response.status === 101) {
                toast.error("Please complete your pending product!")
                push('/dashboard/history');
                return;
            } else {
                return toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refresh();
    }, []);
    return (
        <>
            <form action={handleForm} translate="no">
                <Submit />
            </form>
        </>
    )
}

export default ValidateJourney