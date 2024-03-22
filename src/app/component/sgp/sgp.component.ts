import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { sgp } from '../../models/sgp';

@Component({
  selector: 'app-sgp',
  standalone: true,
  imports: [TableModule, ScrollPanelModule],
  templateUrl: './sgp.component.html',
  styleUrl: './sgp.component.scss'
})
export class SgpComponent {
  // dadosSGP: sgp
  // info: any[] = [
  //   {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 100},
  //   {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 150},
  //   {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 50},
  //   {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 200},
  // ]
  info: sgp[] = [
    new sgp(1, 1, 'actor 1', 'character 1'),
    new sgp(2, 2, 'actor 2', 'character 2'),
    new sgp(3, 3, 'actor 3', 'character 3'),
    new sgp(4, 4, 'actor 4', 'character 4'),
  ];
}
