import React, {FC, useEffect, useState} from 'react';
import styles from './index.module.scss'
import {ToDoBaseItemType, todosType} from "../../MainContent";

type propsType = {
    toggleCheckedToDo: (id: number) => void,
    todoItemId: number,
    isChecked: boolean
    name: string
    setTodos: any
    todos: todosType
    setName: any
}

const dataButton = [1]

export const ToDoItem:FC<propsType> = ({...props}) => {



    return (
        <label className={styles.todo_item}>
            <input type="checkbox" onChange={() => {
                props.toggleCheckedToDo(props.todoItemId)
            }} checked={props.isChecked}/>
            <div className={styles.block}>
                <span className={styles.name}>{props.name}</span>
                    <button
                        className={styles.close}
                        onClick={(e) => {
                            e.preventDefault();
                            // props.todos.splice(props.todoItemId, 1);
                            // console.log(props.todos)
                            props.setTodos(props.todos.filter((todo) => {
                                return todo._id != props.todoItemId
                            }))

                        }}
                    >Х</button>
            </div>
        </label>
    );
};
