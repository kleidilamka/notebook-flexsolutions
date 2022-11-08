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
    const [categories, setCategories] = useState(
        getLocalStorageCtg().filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
    );
    const [selectedId, setSelectedId] = useState('');
    const [filteredTitle, setFilteredTitle] = useState('');
    const [selectCtg, setSelectCtg] = useState();
    const [ctgData, setCtgData] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
        localStorage.setItem('categories', JSON.stringify(categories));
        setCtgData(list);
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
        if (title) {
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

    const changeCtg = (val) => {
        setCtgData(list.filter((i) => i.category === val));
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

                        {filteredTitle === ''
                            ? ctgData.map((item) => {
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
                        <div
                            onClick={() => {
                                setSelectCtg(-1);
                                setCtgData(list);
                            }}
                        >
                            <h3>all</h3>
                        </div>
                        {categories.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        changeCtg(item);
                                        setSelectCtg(index);

                                        console.log(item);
                                    }}
                                    style={{ marginLeft: 10 }}
                                >
                                    <h3>{item}</h3>
                                </div>
                            );
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
