import { Task } from "./types/Task";
import dayjs from "dayjs";

type ConstTaskList = {
    GetTaskList:()=>Array<Task>
}


const TASKS = [
    {Name:"Homework", Limit:dayjs().add(1,'days'), Finished:false},
    {Name:"Desk", Limit:dayjs().add(15,'days'), Finished:true},
    {Name:"Travel", Limit:dayjs().add(5,'days'), Finished:false},
    {Name:"Game", Limit:dayjs().add(100,'days'), Finished:true},
    {Name:"Idolm@ater Millionlive!", Limit:dayjs().add(1000000,'days'), Finished:false},
];

export default function ConstTaskList():ConstTaskList{
    return {
        GetTaskList: ()=>{
            return TASKS;
        }
    }
}