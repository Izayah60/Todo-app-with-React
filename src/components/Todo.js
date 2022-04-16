import { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    function deleteButton() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false)
    }
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteButton}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
            {modalIsOpen && <Backdrop onCancel={closeModal} />}
        </div>
    );
}

export default Todo;
