import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { sempre } from '../../models/sempre';

@Component({
  selector: 'app-sempre',
  standalone: true,
  imports: [TableModule],
  templateUrl: './sempre.component.html',
  styleUrl: './sempre.component.scss'
})
export class SempreComponent {
  info: sempre[] = [
    new sempre('Perfil 1'),
    new sempre('Perfil 2'),
    new sempre('Perfil 3'),
    new sempre('Perfil 4'),
  ];
}
