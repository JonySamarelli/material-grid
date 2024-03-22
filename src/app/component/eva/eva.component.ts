import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Eva } from '../../models/eva';

@Component({
  selector: 'app-eva',
  standalone: true,
  imports: [TableModule],
  templateUrl: './eva.component.html',
  styleUrl: './eva.component.scss'
})
export class EvaComponent {
  info: Eva[] = [
    new Eva('email 1', 'profileName 1', 1, 'programName 1', 1, 1, 'userLogin 1'),
    new Eva('email 2', 'profileName 2', 2, 'programName 2', 2, 2, 'userLogin 2'),
    new Eva('email 3', 'profileName 3', 3, 'programName 3', 3, 3, 'userLogin 3'),
    new Eva('email 4', 'profileName 4', 4, 'programName 4', 4, 4, 'userLogin 4'),
  ];
}
