import React from 'react';

const Note = ({ item }) => {
    return (
        <div className="note">
            <div className="top-note">
                <p>{item.title}</p>
                <p>{item.date}</p>
            </div>
            <div className="bottom-note">
                <h4>{item.name}</h4>
                <p>
                    lorem djsa hsdkjd hsdaj dhsak dhjsadh jksahd jksahd jksahd
                    jksah djksahd
                </p>
            </div>
        </div>
    );
};

export default Note;
