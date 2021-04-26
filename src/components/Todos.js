import React from 'react'
import TodoItem from './Todo'

const Todos = (props) => {
    const container = {
        minHeight: "70vh"

    }
    return (
        <div className="container" style={container}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? <h1>No Todo To Display</h1> :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }

        </div>
    )
}

export default Todos