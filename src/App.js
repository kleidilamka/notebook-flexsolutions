import './App.css';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Note from './components/Note';
import Categories from './components/Categories';

let randomText =
    'loremd oremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj oremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj oremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadjoremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj oremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj oremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hjasd hjsakpd hsaj dhsadj loremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj loremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj hasploremd sajdh asdj pjad hjasd hjsakpd hsaj dhsadj l';

const getLocalStorageList = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('list')));
    }

    return [];
};

const getLocalStorageCtg = () => {
    let categoriesList = localStorage.getItem('categories');
    if (categoriesList) {
        return (categoriesList = JSON.parse(
            localStorage.getItem('categories')
        ));
    }
    return [];
};

function App() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');
    const [list, setList] = useState(getLocalStorageList());
    const [date, setDate] = useState('');
    const [categories, setCategories] = useState(getLocalStorageCtg());
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [selectedId, setSelectedId] = useState('');

    const [openModal, setOpenModal] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [list, categories]);

    const toggleModal = () => {
        setOpenModal(true);
    };

    const toggleOpenEdit = () => {
        setOpenEdit(true);
        setIsEditing(true);
    };

    const closeModal = () => {
        setOpenModal(false);
        setOpenEdit(false);
    };

    const createNote = (e) => {
        e.preventDefault();
        if (!title) {
            showAlert(true, 'danger', 'Please enter a value!');
        } else if (title && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editId) {
                        return {
                            ...item,
                            title: title,
                            category: category,
                            text: text,
                            date: Date.now(),
                        };
                    }
                    return item;
                })
            );
            setTitle('');
            setText('');
            setCategory('');
            setEditId(null);
            setIsEditing(false);
            setDate('');
            showAlert(true, 'success', 'Value changed!');
        } else {
            showAlert(true, 'success', 'Value added to the list!');
            const newItem = {
                id: new Date().getTime().toString(),
                title: title,
                category: category,
                text: text,
                date: Date.now(),
            };
            setList([...list, newItem]);
            setTitle('');
            setCategory('');
            setText('');
            setDate('');
            categories.push(newItem.category);
        }
    };

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
    };

    const editItem = (id) => {
        const editItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setTitle(editItem.title);
        setCategory(editItem.category);
        setText(editItem.text);
    };

    return (
        <div className="App">
            <div className="root">
                {openModal || openEdit ? (
                    <Modal
                        closeModal={closeModal}
                        createNote={createNote}
                        title={title}
                        setTitle={setTitle}
                        category={category}
                        setCategory={setCategory}
                        text={text}
                        setText={setText}
                        isEditing={isEditing}
                        editItem={editItem}
                    />
                ) : null}
                <section className="section one">
                    <input className="input" placeholder="Search Note" />
                    <button className="add-button" onClick={toggleModal}>
                        Add Note
                    </button>
                    <div className="notes">
                        {list.map((item) => {
                            return (
                                <Note
                                    key={item.id}
                                    item={item}
                                    date={date}
                                    selectedId={selectedId}
                                    setSelectedId={setSelectedId}
                                    text={text}
                                />
                            );
                        })}
                    </div>
                </section>
                <section className="section two">
                    <div className="categories">
                        {categories.map((item) => {
                            return <Categories item={item} key={item} />;
                        })}
                    </div>
                    <div className="note-content-top">
                        <h3>Note Title</h3>
                        <MdOutlineModeEditOutline
                            className="edit-btn"
                            size={24}
                            onClick={toggleOpenEdit}
                        />
                    </div>
                    <div className="note-content">
                        {list
                            .filter((item) => item.id === selectedId)
                            .map((item) => {
                                return <p>{item.text}</p>;
                            })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
