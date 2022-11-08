import React from 'react';
import moment from 'moment';

const Note = ({ item, selectedId, setSelectedId, toggleOpenEdit }) => {
    const selectItem = () => {
        setSelectedId(item.id);
    };

    return (
        <div
            className="note"
            style={{
                backgroundColor:
                    item.id === selectedId ? '#ffff' : 'transparent',
            }}
            onClick={() => selectItem()}
        >
            <div className="top-note">
                <p>{item.title}</p>
                <p>{moment(item.date).format('LLL')}</p>
            </div>
            <div className="bottom-note">
                <h4>{item.name}</h4>
                <p>{item.text}</p>
            </div>
        </div>
    );
};

export default Note;
