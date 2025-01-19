import ConstTaskList from './ConstTaskList';
import './App.css'

import TodoApp from './TodoApp'


function App() {
  return <TodoApp taskGetter={ConstTaskList()}/>;
}



export default App
