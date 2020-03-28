import React from 'react'
import PropTypes from "prop-types";
import TodoItem from './TodoItem'

const style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={style.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList