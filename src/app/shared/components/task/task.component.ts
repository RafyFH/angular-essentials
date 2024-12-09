import {Component, Input} from '@angular/core';
import {ItemComponent} from "./item/item.component";
import {dummyTasks} from "../../../dummy-tasks";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  itemtask = dummyTasks;
  @Input({required: true}) userId!: string;
  @Input({required:true}) name!: string;

  get selectedUserTasks(){
    return this.itemtask.filter((item)=> item.userId === this.userId);
  }
}
