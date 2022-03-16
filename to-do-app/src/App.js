
import './App.css';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Todos from  "./components/Todos";
import {AddTodo} from "./components/AddTodo";


// state hook
import React, { useState , useEffect} from 'react';

function App() {

  //Getting access to the Local Storage//
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title , desc) => {
    console.log("I am adding this todo");
    let serialNum;
    if(todos.length === 0){
      serialNum = 1;
    }
    else{
      serialNum = todos[todos.length - 1].serial + 1 ;
    }
    const myTodo = {
      serial : serialNum,
      title : title,
      desc : desc
    }

    let check = false;
    for(let i = 0; i < todos.length; i ++){
      if(todos[i].title === myTodo.title && todos[i].desc === myTodo.desc){
        alert("Same todo already there!!!!");
        check = true;
      }
      
    }
    if(check === false){
      setTodos([...todos , myTodo]);
      alert("Todo Added!");
    }
    console.log(myTodo);


    // if(localStorage.getItem("todos")){
      
    // }
    // setTodos([...todos , myTodo]);

  }

  

  //Defining the function of Delete//
  const onDelete = (todo) => {
    console.log("Do you really want to delete the clicked " , todo);

    // Deleting this way doesn't work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e!== todo;
    }))

    localStorage.getItem("todos");
  }
  // this deleting won't remove the todo and refresh the page , for that we need to use State Hook from react;


  // List of todos to be displayed on the website.
  
  // the below is the todo list without using thr STATE hook.
  // let todos = [
  //   {
  //     serial : 1,
  //     title : "go to market",
  //     desc : "you need to go to market"
  //   },
  //   {
  //     serial : 2,
  //     title : "go to mall",
  //     desc : "you need to go to mall"
  //   },
  //   {
  //     serial : 3,
  //     title : "go to ghat",
  //     desc : "you need to go to ghat"
  //   }
  // ];


  // Below is the todos list elements using the state hook
  const [todos, setTodos] = useState(
    initTodo
    //SOME INITIAL TODOS CAN BE ADDED -- BUT WITHOUT USE OF LOCAL STORAGE THE WEBSITE IS A STATIC CURRENT LOADED PAGE.
    // {
    //   serial : 1,
    //   title : "go to market",
    //   desc : "you need to go to market"
    // },
    // {
    //   serial : 2,
    //   title : "go to mall",
    //   desc : "you need to go to mall"
    // },
    // {
    //   serial : 3,
    //   title : "go to ghat",
    //   desc : "you need to go to ghat"
    // }

  );
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos   ));
  } , [todos])


  return (
    <>
      {/*This element is for Navbar */}
      <Navbar title = "Todo List" second= "Home" third = "Contact Us " searchBarShow = {false}/> 
      {/* use of proptype is clearly visible. */}

      <AddTodo addTodo = {addTodo}/>

      {/* This element constitutes for the todos elements */}
      <Todos todos = {todos} onDelete = {onDelete} />

      {/* For footer element. */}
      <Footer/>
    </>
  );
}

export default App;
