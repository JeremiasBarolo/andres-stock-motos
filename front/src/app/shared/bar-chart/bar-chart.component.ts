import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, LinearScale, BarElement, BarController, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;

  barChart: any;

  constructor() {
    // Register components
    Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);
  }

  ngAfterViewInit(): void {
    this.loadSalesData();
  }

  loadSalesData() {
    const salesData = [10, 20, 30, 40, 20]; 
    const labels = ['Insumos', 'Accesorios', 'Repuestos', 'Motos Nuevas', 'Motos Usadas'];

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Ventas',
          data: salesData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: labels
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
