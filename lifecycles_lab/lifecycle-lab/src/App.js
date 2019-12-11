import React from 'react';
import Form from './Component/Form'
import Todo from './Component/Todo'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      todoList: []
    };
  }

  handleOnChangeItem = (event) => {
    event.preventDefault()
    const value = event.target.value
    this.setState({
      todo:value 
    })
  }



  handleOnSubmit = (event) =>{
    event.preventDefault();
    const {todo, todoList} = this.state
    let copyArray = todoList
    copyArray.push({todo})
    this.setState({
      todoList: copyArray
    })
  }  



  componentDidMount(){
    console.log(this.state, 'App component mounted')
  }
  componentDidUpdate() {
    console.log(this.state, 'state being updated')
  };
  


  render() {
    return (
      <div className='App'>
        <h1> To Do  List </h1>

        <Form 
         handleOnChangeItem={this.handleOnChangeItem}
         handleOnSubmit={this.handleOnSubmit}
         />

<ul className="Todo">
              <h5 className='item'></h5>

              {this.state.todoList.map((item, i) => {
                return (
                  <Todo
                  todo = {item.todo}
                    key={i}
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
