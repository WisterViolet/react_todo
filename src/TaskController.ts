import { Task } from "./types/Task";
export interface TaskController {
    GetTaskList(): Array<Task>
}