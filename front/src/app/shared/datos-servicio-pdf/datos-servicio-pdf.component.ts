import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-datos-servicio-pdf',
  templateUrl: './datos-servicio-pdf.component.html',
  styleUrls: ['./datos-servicio-pdf.component.css']
})
export class DatosServicioPdfComponent implements OnInit {
  cardData: any;
  recepcionista: any;

  constructor(
    private route: ActivatedRoute,
    private personasService: PersonasService,
    
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      
      
      this.cardData = { ...params, Servicios: JSON.parse(params['Servicios']) };
      console.log(this.cardData);
      if (this.cardData.recepcionistaId) {
        this.personasService.getById(this.cardData.recepcionistaId).subscribe((res: any) => {
          this.recepcionista = res;
          console.log(this.recepcionista);
        });
      } else {
        console.error('No recepcionistaId found');
      }
    });
  }
}
