import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Alert from './Alert';

const Modal = ({
    createNote,
    title,
    setTitle,
    category,
    setCategory,
    closeModal,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="modal-wrapper"
        >
            <motion.div className="inputs-top-container">
                <motion.div className="modal-inputs">
                    <input
                        className="modal-input"
                        placeholder="Title..."
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <input
                        style={{ marginLeft: 10 }}
                        className="modal-input"
                        placeholder="Category..."
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                </motion.div>
                <AiOutlineCloseCircle
                    color="red"
                    size={30}
                    onClick={closeModal}
                />
            </motion.div>
            <textarea
                className="modal-description"
                placeholder="Description..."
            />
            <Alert />
            <button className="add-note" onClick={createNote}>
                Add Note
            </button>
        </motion.div>
    );
};
export default Modal;
