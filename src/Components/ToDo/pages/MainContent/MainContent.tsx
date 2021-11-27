import React, {FC, useEffect, useState} from 'react';
import styles from './index.module.scss'
import {ToDoItem} from "./components/ToDoItem/ToDoItem";
import { nanoid } from 'nanoid/non-secure'
import { customAlphabet } from 'nanoid'

export type ToDoBaseItemType = {
    _id: number
    name: string
    isChecked: boolean
}



export type ToDoBaseType = [
    ToDoBaseItemType
]

export type todosType = Array<ToDoBaseItemType>


const getInitialTodos = () => {
    const todosFromLocalStorage = localStorage.getItem('todos')

    return todosFromLocalStorage
        ? JSON.parse(todosFromLocalStorage)
        : []
}

export const MainContent:FC<{}> = (props) => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState<todosType>([])
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        if (didMount) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos]);

    useEffect(() => {
        setDidMount(true)
        setTodos(getInitialTodos())
    }, [])

    const onKeyPressNameHandler = (e:any) => {
          if (e.key === 'Enter') {
              // const newId = Math.ceil(Math.random() * 10000)
              const nanoid: any  = customAlphabet('1234567890abcdef', 10)
              e.preventDefault()
              setTodos(prev => [...prev, {_id: nanoid(), name, isChecked: false}])
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

    const clearInput = () => {
        localStorage.clear()
        setTodos(getInitialTodos())
    }
    return (
        <>
            <h1>ToDo приложение</h1>
            {todos && todos.map((todo:ToDoBaseItemType, idx:number) => (
                <ToDoItem
                    key={todo._id}
                    name={todo.name}
                    isChecked={todo.isChecked}
                    todoItemId={todo._id}
                    toggleCheckedToDo={toggleCheckedToDo}
                    setTodos={setTodos}
                    todos={todos}
                    setName={setName}

                />)
            )}
            <input
                className={styles.input}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyPress={onKeyPressNameHandler}
                placeholder='Введите название'/>

            <button className={styles.button} onClick={(e)=> e? clearInput() : null}>Очистить все</button>
        </>

    );
};


