import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
import { useState, useEffect } from "react";
import About from './components/About'

// react router dom 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }





  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }));

  };





  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) { sno = 0 }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo])
    localStorage.setItem('todos', JSON.stringify(todos))
  }



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])






  return (
    <>
      <Router>
        <Navbar title={"My To Dos List"} searchbar={false} />


        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>


          <Route exact path="/about">
            <About />
          </Route>


        </Switch>





        <Footer />
      </Router>
    </>
  );
}

export default App;
