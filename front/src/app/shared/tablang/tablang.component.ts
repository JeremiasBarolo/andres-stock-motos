import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablang',
  templateUrl: './tablang.component.html',
  styleUrl: './tablang.component.css'
})
export class TablangComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
