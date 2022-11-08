import './App.css';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Note from './components/Note';
import Categories from './components/Categories';

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
    const [selectedId, setSelectedId] = useState('');
    const [filteredTitle, setFilteredTitle] = useState('');

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [list, categories]);

    let searchFilter = list.filter((item) =>
        item.title.toLocaleLowerCase().includes(filteredTitle)
    );

    const toggleModal = () => {
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    const createNote = (e) => {
        e.preventDefault();
        if (!title) {
            showAlert(true, 'danger', 'Please enter a value!');
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

    return (
        <div className="App">
            <div className="root">
                {openModal ? (
                    <Modal
                        closeModal={closeModal}
                        createNote={createNote}
                        title={title}
                        setTitle={setTitle}
                        category={category}
                        setCategory={setCategory}
                        text={text}
                        setText={setText}
                    />
                ) : null}
                <section className="section one">
                    <input
                        className="input"
                        placeholder="Search Note"
                        value={filteredTitle}
                        onChange={(e) =>
                            setFilteredTitle(e.target.value.toLocaleLowerCase())
                        }
                    />
                    <button className="add-button" onClick={toggleModal}>
                        Add Note
                    </button>
                    <div className="notes">
                        {!searchFilter.length && (
                            <div>
                                There are no items to display adjust your filter
                                criteria
                            </div>
                        )}
                        {filteredTitle === 0
                            ? list.map((item) => {
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
                              })
                            : searchFilter.map((item) => {
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
