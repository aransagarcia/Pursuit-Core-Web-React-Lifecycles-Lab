 import React from 'react';
 import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class TodoList extends React.Component {
    // const {todo} = props
    componentDidMount(){
        toast.success(`New todo: ${this.props.todo}`)
    }

    componentWillUnmount(){
        toast.error(`Todo Removed: ${this.props.todo}`)
    }

    delete = () => {
// console.log(this.props.index)
        this.props.handleOnDelete(this.props.index)
    }
    
    render(){
        return(
      
            <li > 
                <h5 > {this.props.todo} 
                <button onClick = {this.delete}> x
                </button>
                </h5> 
            
            </li>
       
    
    
      
        )
    }
}


export default TodoList;
