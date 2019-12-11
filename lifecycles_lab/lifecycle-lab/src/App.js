import React from 'react';
import Form from './Component/Form'
import Todo from './Component/Todo'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


import './App.css';

toast.configure()

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todoList: []
    };
  }

  handleOnChangeItem = (event) => {
    const value = event.target.value
    this.setState({
      todo: value
    })
  }



  handleOnSubmit = (event) => {
    event.preventDefault();
    const { todo, todoList } = this.state
    let copyArray = todoList
    copyArray.push({ todo })
    this.setState({
      todo: '',
      todoList: copyArray
    })
  }


  handleOnDelete = (index) => {
    console.log(index)
    const {todoList} = this.state
    todoList.splice(index,1)
    this.setState({
      todoList: todoList
    })

  }



  // componentDidMount() {
  //   console.log(this.state, 'App component mounted')
  // }
  // componentDidUpdate() {
  //   console.log(this.state, 'state being updated')
  // };



  render() {
    // toast('render sucess')
    return (
      <div className='App'>
        <h1> To Do  List </h1>
   


        <Form
          handleOnChangeItem={this.handleOnChangeItem}
          handleOnSubmit={this.handleOnSubmit}
          todo = {this.state.todo}
         
        />

        <ul className="Todo" >
          <h5 className='item'></h5>

          {this.state.todoList.map((item, i) => {
            return (
              <Todo 
                todo={item.todo}
                key={i}
                index={i}
                 handleOnDelete={this.handleOnDelete}

              />

            )
          })
          }
        </ul>
    

      </div>
    )
  }
}



export default App;
