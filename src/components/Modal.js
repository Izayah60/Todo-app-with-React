function Modal(props) {
    function cancelButton() {
        props.onCancel();
    }

    function confirmButton() {
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelButton}>Cancel</button>
            <button className="btn" onClick={confirmButton}>Confirm</button>
        </div>
    );
}

export default Modal;
