import React, {FC} from 'react';
import styles from './index.module.scss'
import {ToDoBaseItemType, todosType} from "../../MainContent";

type propsType = {
    toggleCheckedToDo: (id: number) => void,
    todoItemId: number,
    isChecked: boolean
    name: string
}
export const ToDoItem:FC<propsType> = ({...props}) => {
    return (
        <div className={styles.todo_item} onClick={() => {
            props.toggleCheckedToDo(props.todoItemId)
        }}>

            <input type="checkbox" checked={props.isChecked}/>
            <span className={styles.name}>{props.name}</span>
        </div>
    );
};
