import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type task = {
  Name:string,
  Limit:number,
  Finished:boolean
}

const TASKS = [
  {Name:"Homework", Limit:1, Finished:false},
  {Name:"Desk", Limit:15, Finished:true},
  {Name:"Travel", Limit:5, Finished:false},
  {Name:"Game", Limit:100, Finished:true},
  {Name:"Idolm@ater Millionlive!", Limit:1000000, Finished:false},
];


function SearchBar(){
  return (
    <form>
      <input type="text" placeholder='Search' />
      <label>
      <input type="checkbox" />Only show tasks unfinished
      </label>
    </form>
  );
}

function TodoTable({tasks}:{tasks:Array<task>}){
  const taskList = tasks.map((task, index) => {
    const fnd = task.Finished ? "Yes" : "No";
    return <p key={index}>{task.Name} {task.Limit+" Days"} {fnd}</p>;
  })

  return (
    <div>
      <p> Name Limit Finished</p>
      {taskList}
    </div>
  )
}

function TodoApp({tasks}:{tasks:Array<task>}){
  return (
    <div>
      <SearchBar />
      <TodoTable tasks={tasks} />
    </div>
  );
}

function App() {
  return <TodoApp tasks={TASKS}/>;
}



export default App
