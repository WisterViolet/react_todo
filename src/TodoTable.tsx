import { Task } from './types/Task'

export default function TodoTable({tasks, filterText, isUnfinishedOnly}:{
  tasks:Array<Task>,
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