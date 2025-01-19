import { useState } from 'react';
import { TaskController } from './TaskController';

import TodoTable from './TodoTable';
import SearchBar from './SearchBar';

export default function TodoApp({taskGetter}:{
  taskGetter:TaskController
}){
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
        tasks={taskGetter.GetTaskList()} 
        filterText={filterText} 
        isUnfinishedOnly={isUnfinishedOnly} />
    </div>
  );
}