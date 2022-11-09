import React from 'react';

const Categories = ({ item, index, changeCtg, setSelectCtg }) => {
    return (
        <div
            key={index}
            onClick={() => {
                changeCtg(item);
                setSelectCtg(index);
            }}
            style={{ marginLeft: 10 }}
        >
            <h3>{item}</h3>
        </div>
    );
};

export default Categories;
