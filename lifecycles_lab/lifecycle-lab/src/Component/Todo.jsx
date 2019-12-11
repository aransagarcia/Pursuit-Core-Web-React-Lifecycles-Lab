 import React, { Component } from 'react';

const TodoList = (props) =>{
    const {todo} = props
    return(
      
            <li>
                <h5> {todo} </h5>
            </li>
       
    )

}













export default TodoList;


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // minified version is also included
// // import 'react-toastify/dist/ReactToastify.min.css';

// class Todo extends Component {
//   notify = () => toast("Wow so easy !");

//   render(){
//     return (
//       <div>
//         <button onClick={this.notify}>Notify !</button>
//         <ToastContainer />
//       </div>
//     );
//   }
// }

// export default Todo;