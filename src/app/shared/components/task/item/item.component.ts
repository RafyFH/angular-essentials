import {Component, EventEmitter, Input, Output} from '@angular/core';
import { type Task } from "../../../../core/models/task.model";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

export class ItemComponent {
  @Input( {required: true} ) task!: Task
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
