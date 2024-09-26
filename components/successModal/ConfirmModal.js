"use client";

const ConfirmModal = ({ title, setIsSuccess, handleFunction }) => {

    const handleForm = () => {
        handleFunction();
    }

    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-inner-wrapper">
                <div className="waring-wrapper">
                    <i className="fa fa-warning"></i>
                </div>
                <h3 className="warning_text">{title}</h3>
                <div className="confirmation-action-btns">
                    <button onClick={() => setIsSuccess(false)} className="btn-sm global-primary-outline-btn mt1 mr1">No</button>
                    <button onClick={() => handleForm()} className="btn-sm global-primary-btn mt1">Yes</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal