import React from 'react'
import firebase from '../firebase/config';

function Userbtn() {
    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
      };
      const completeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
          complete: !todo.complete,
        });
      };
  return (
    <div>
        <div className="container-fluid ">
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
      </div>
    </div>
  )
}

export default Userbtn