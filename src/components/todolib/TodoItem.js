import React from "react";
import "./todo.css";

function TodoItem({item,updateList}){
    return(
        <div className="item">
            <input type="checkbox" defaultChecked={item.checked} onChange={ e => updateList(item.label)}/>
            <span>{item.label}</span>
            
        </div>
    );
}

export default TodoItem;