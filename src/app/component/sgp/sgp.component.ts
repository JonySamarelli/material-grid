import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-sgp',
  standalone: true,
  imports: [TableModule, ScrollPanelModule],
  templateUrl: './sgp.component.html',
  styleUrl: './sgp.component.scss'
})
export class SgpComponent {
  info: any[] = [
    {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 100},
    {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 150},
    {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 50},
    {code: 'info 1', name: 'info 2', category: 'info 3', quantity: 200},
  ]
}
