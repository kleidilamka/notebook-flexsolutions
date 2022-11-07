import './App.css';
import { MdOutlineModeEditOutline } from 'react-icons/md';

function App() {
    return (
        <div className="App">
            <div className="root">
                <section className="section one">
                    <input className="input" placeholder="Search Note" />
                    <button className="add-note">Add Note</button>
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
