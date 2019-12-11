import React from 'react'



const Form = (props) => {
    return (
        <form onSubmit={props.handleOnSubmit}>
            <div className='todo Form'>
                <label></label>
                <input
                    type='text'
                    placeholder="Clean Bedroom"
                    onChange = {props.handleOnChangeItem}
                >
                </input>

            </div>
        </form>
    )

}

export default Form;