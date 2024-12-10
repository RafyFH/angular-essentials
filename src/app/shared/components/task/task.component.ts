import {Component, Input} from '@angular/core';
import {ItemComponent} from "./item/item.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {dummyTasks} from "../../../dummy-tasks";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ItemComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  itemtask = dummyTasks;
  @Input({required: true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask = false;

  get selectedUserTasks(){
    return this.itemtask.filter((item)=> item.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.itemtask = this.itemtask.filter((item)=> item.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
