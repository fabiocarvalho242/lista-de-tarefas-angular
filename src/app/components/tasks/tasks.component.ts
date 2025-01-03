import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTasksComponent } from '../add-tasks/add-tasks.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private taskService:TaskServiceService){}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((dado) => {

      this.tarefas = dado;
      console.log(dado);
    });
  }

  AddTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa)
    });
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() =>
      (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }
}
