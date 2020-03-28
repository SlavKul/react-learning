import React from 'react'
import PropTypes from "prop-types";
import { Radio, Button} from 'antd';


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
    input: {
        marginRight: '.5rem',
    }
}

function TodoItem({todo, index, onChange}) {
    return (
    <li style={styles.li}>
        <span>
            <Radio />
            <input type="checkbox" style={styles.input} onChange={() => console.log(todo.id)}/>
            <strong>{index +1}</strong>
            &nbsp;
            {todo.title}
        </span>
            <button className="rm">&times;</button>
            <Button type="primary">Primary</Button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default TodoItem