import './App.css';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const toggleModal = () => {
        setOpenModal(true);
    };

    const toggleOpenEdit = () => {
        setOpenEdit(true);
    };

    const closeModal = () => {
        setOpenModal(false);
        setOpenEdit(false);
    };

    const Modal = () => {
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
                <motion.div className="modal-inputs">
                    <input className="modal-input" placeholder="Title..." />
                    <input className="modal-input" placeholder="Category..." />
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
                <button className="add-note">Add Note</button>
            </motion.div>
        );
    };

    return (
        <div className="App">
            <div className="root">
                {openModal || openEdit ? <Modal /> : null}
                <section className="section one">
                    <input className="input" placeholder="Search Note" />
                    <button className={`add-button`} onClick={toggleModal}>
                        Add Note
                    </button>
                    <div className="notes">
                        {[
                            'Agenda',
                            'Timetable',
                            'Shopping',
                            'Timetable',
                            'Shopping',
                        ].map((item) => {
                            return (
                                <div className="note">
                                    <div className="top-note">
                                        <p>Shopping</p>
                                        <p>{Date.now()}</p>
                                    </div>
                                    <div className="bottom-note">
                                        <h4>{item}</h4>
                                        <p>
                                            lorem djsa hsdkjd hsdaj dhsak
                                            dhjsadh jksahd jksahd jksahd jksah
                                            djksahd
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="section two">
                    <div className="categories">
                        {[
                            'Agenda',
                            'Timetable',
                            'Shopping',
                            'Agenda',
                            'Timetable',
                            'Shopping',
                            'Agenda',
                            'Timetable',
                            'Shopping',
                            'Agenda',
                            'Timetable',
                            'Shopping',
                            'Agenda',
                            'Timetable',
                            'Shopping',
                            'Agenda',
                            'Timetable',
                            'Shopping',
                        ].map((item) => {
                            return (
                                <div className="category">
                                    <h4>{item}</h4>
                                </div>
                            );
                        })}
                    </div>
                    <div class="note-content-top">
                        <h3>Note Title</h3>
                        <MdOutlineModeEditOutline
                            className="edit-btn"
                            size={24}
                            onClick={toggleOpenEdit}
                        />
                    </div>
                    <div className="note-content">
                        <p>
                            lorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dh
                            lorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhloremlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhloremlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhloremlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhloremlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                            sjdh aksd hajsk dhsajk dhlorem sjdh aksd hajsk
                            dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh
                            aksd hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk
                            dhlorem sjdh aksd hajsk dhsajk dhlorem sjdh aksd
                            hajsk dhsajk dhlorem sjdh aksd hajsk dhsajk dhlorem
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
