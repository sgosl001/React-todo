import React from "react";
import ListItem from "./listItem";

const List = ({ title, items }) => {
    return (    
        <div>
            <h3>{title}</h3>
            {items.map(item => (
                <ListItem key={item.id} text={item.text} />
            ))}
        </div>
    );
};

export default List