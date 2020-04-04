import React, {useContext} from 'react'
import PropTypes from "prop-types";
import { Checkbox, Button} from 'antd';
import Context from '../context'


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alighnItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    console.log(todo.completed)
    const classes = []

    if(todo.completed){
        classes.push('done')
    }
    return (
    <li style={styles.li}>
        <span className={classes.join(' ')}>
            <Checkbox checked={todo.completed} onChange={() => onChange(todo.id)}/>
            &nbsp;
            <strong>{index +1}</strong>
            &nbsp;
            {todo.title}
        </span>
            <Button onClick={removeTodo.bind(null, todo.id)} className="rm" type="primary" size='small'>&times;</Button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem