import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-tasks',
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.css'
})
export class AddTasksComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddtarefa: boolean = false;

  AlteraVisualizacao(valor: boolean) {
    this.mostrarAddtarefa = valor;
  }

  onSubmit() {
    if(!this.tarefa) {
      alert('Adicione uma tarefa');
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }

}
