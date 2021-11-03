import React, {FC, useState} from 'react';
import styles from './index.module.scss'
import {ToDoItem} from "./components/ToDoItem/ToDoItem";

export type ToDoBaseItemType = {
    _id: number
    name: string
    isChecked: boolean
}


type GenericType<T> = {
    name: T
}
const blob:GenericType<{
    title: string
}> = {
    name: {
        title: ''
    }
}

export type ToDoBaseType = [
    ToDoBaseItemType
]

export type todosType = Array<ToDoBaseItemType>

export const MainContent:FC<{}> = (props) => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState<todosType>([
        {
            _id: 0,
            name: 'купить мак',
            isChecked: true
        },
    ])

    const onKeyPressNameHandler = (e:any) => {
          if (e.key === 'Enter') {
              e.preventDefault()
              setTodos(prev => [...prev, {_id: todos.length, name, isChecked: false}])
              setName('')
        }
    }

    const toggleCheckedToDo = (id: number) => {
        const newArray = todos.map((item) => {
            if (item._id == id) {
                return {
                    ...item,
                    isChecked: !item.isChecked
                }
            }
            return item
        })

        setTodos(newArray)
    }

    return (
        <>
            <h1>ToDo приложение</h1>
            {todos && todos.map((todo:ToDoBaseItemType, idx:number) => (
                <ToDoItem
                    key={todo._id}
                    name={todo.name}
                    isChecked={todo.isChecked}
                    todoItemId={idx}
                    toggleCheckedToDo={toggleCheckedToDo}
                />)
            )}
            <input
                className={styles.input}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyPress={onKeyPressNameHandler}
                placeholder='Введите название'/>
        </>
    );
};


