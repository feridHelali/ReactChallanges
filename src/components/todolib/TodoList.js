import React, { Fragment,useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(){
    const [TodoList, setTodoList] = useState([
        {label:"Arrange Files",checked:false},
        {label:"Commit Changes",checked:false},
        {label:"Push commit to github",checked:false},
        {label:"Deploy the Project",checked:false}
    ]);

    function updateTodoList(itemToUpdate){
        let [...tmpList]=TodoList;
        tmpList.forEach(item=> {
            if(item.label===itemToUpdate){
                item.checked = !item.checked;
            }
            setTodoList(tmpList);
        });
        console.table(TodoList);
    }

    return (
        <Fragment>
            {TodoList.map((item,index)=><TodoItem key={index} item={item} updateList={updateTodoList}/>)}
        </Fragment>
    );

}

export default TodoList;