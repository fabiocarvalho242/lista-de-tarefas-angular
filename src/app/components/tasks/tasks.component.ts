import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
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
    })
  }
}
