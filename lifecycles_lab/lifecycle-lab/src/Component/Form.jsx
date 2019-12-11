import React from 'react'



const Form = (props) => {
    const todo = props.todo
    //  console.log()
    return (
        <form onSubmit={props.handleOnSubmit}>
            <div className='todo Form'>
                <label></label>
                <input
                    type='text'
                    onChange = {props.handleOnChangeItem}
                     value = {todo}
                >
                </input>

            </div>
        </form>
    )

}

export default Form;