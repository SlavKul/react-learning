import React, {useState} from 'react'
import { Button, Input} from 'antd';
import { PlusOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types'

function AddTodo({ onCreate}){
    function submitHandler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }

    const [value, setValue] = useState('')
    return(
        <form style={{marginBottom: '.5rem', display: 'flex'}} onSubmit={submitHandler}>
            <Input value={value} onChange={event => setValue(event.target.value)} style={{flex: '1', marginRight: '.5rem'}} placeholder="Add new todo" prefix={<PlusOutlined />} />
            <Button style={{height: '100%'}} type="primary" htmlType="submit">Add Todo</Button>
        </form>
    )
}

/*AddTodo.PropTypes ={
    onCreate: PropTypes.func.isRequired
}*/

export default AddTodo