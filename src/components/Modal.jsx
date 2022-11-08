import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Modal = ({
    createNote,
    title,
    setTitle,
    category,
    setCategory,
    text,
    setText,
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
            <motion.form className="inputs-top-container">
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
            </motion.form>
            <textarea
                className="modal-description"
                placeholder="Description..."
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button className="add-note" onClick={createNote}>
                Add Note
            </button>
        </motion.div>
    );
};
export default Modal;
