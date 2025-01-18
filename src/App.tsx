import { useState } from 'react'
import dayjs, {Dayjs} from 'dayjs'
import './App.css'

type task = {
  Name:string,
  Limit:Dayjs,
  Finished:boolean
}


const TASKS = [
  {Name:"Homework", Limit:dayjs().add(1,'days'), Finished:false},
  {Name:"Desk", Limit:dayjs().add(15,'days'), Finished:true},
  {Name:"Travel", Limit:dayjs().add(5,'days'), Finished:false},
  {Name:"Game", Limit:dayjs().add(100,'days'), Finished:true},
  {Name:"Idolm@ater Millionlive!", Limit:dayjs().add(1000000,'days'), Finished:false},
];


function SearchBar({filterText, isUnfinishedOnly, onFilterTextChange, onIsUnfinishedOnlyChange}:{
  filterText: string,
  isUnfinishedOnly: boolean,
  onFilterTextChange: (filterText:string)=>void,
  onIsUnfinishedOnlyChange: (checked:boolean)=>void
}){
  return (
    <form>
      <input 
        type="text" 
        placeholder='Search' 
        value={filterText} 
        onChange={(e)=>onFilterTextChange(e.target.value)}/>
      <label>
      <input 
        type="checkbox" 
        checked={isUnfinishedOnly}
        onChange={(e)=>onIsUnfinishedOnlyChange(e.target.checked)} />Only show tasks unfinished
      </label>
    </form>
  );
}

function TodoTable({tasks, filterText, isUnfinishedOnly}:{
  tasks:Array<task>,
  filterText: string,
  isUnfinishedOnly: boolean
}){
  const taskList = tasks.map((task, index) => {
    if(task.Finished && isUnfinishedOnly){
      return;
    }
    if(task.Name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1){
      return;
    }
    const fnd = task.Finished ? "Yes" : "No";
    return <p key={index}>{task.Name} {task.Limit.format("YYYY-MM-DD")} {fnd}</p>;
  })

  return (
    <div>
      <p> Name Limit Finished</p>
      {taskList}
    </div>
  )
}

function TodoApp({tasks}:{tasks:Array<task>}){
  const [filterText, setFilterText] = useState('');
  const [isUnfinishedOnly, setIsUnfinishedOnly] = useState(false);
  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        isUnfinishedOnly={isUnfinishedOnly}
        onFilterTextChange={(filterText:string)=>setFilterText(filterText)} 
        onIsUnfinishedOnlyChange={(checked:boolean)=>setIsUnfinishedOnly(checked)}/>
      <TodoTable 
        tasks={tasks} 
        filterText={filterText} 
        isUnfinishedOnly={isUnfinishedOnly} />
    </div>
  );
}

function App() {
  return <TodoApp tasks={TASKS}/>;
}



export default App
