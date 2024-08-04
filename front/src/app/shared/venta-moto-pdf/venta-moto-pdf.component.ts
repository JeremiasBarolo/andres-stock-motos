import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosAdicionalesService } from '../../services/datos-adicionales.service';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-venta-moto-pdf',
  templateUrl: './venta-moto-pdf.component.html',
  styleUrl: './venta-moto-pdf.component.css'
})
export class VentaMotoPdfComponent implements OnInit {
  cardData: any;
  datosAdicionales: any;
  Persona: any;
  debeChecked: boolean | undefined;
  pagoChecked: boolean | undefined;

constructor(
  private route: ActivatedRoute,
  private datosAdicionalesService: DatosAdicionalesService,
  private personasService: PersonasService


) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      
      
      this.cardData = { ...params, Moto: JSON.parse(params['Moto']) };
      console.log(this.cardData);
      

      if (this.cardData.personaId) {
        this.datosAdicionalesService.getDatosAdicionales(this.cardData.personaId).subscribe((res: any) => {
          this.datosAdicionales = res;
          this.setCheckboxes(res.pago)
        });

        this.personasService.getById(this.cardData.personaId).subscribe((res: any) => {
          this.Persona = res;
          console.log(this.Persona);
        });
      } else {
        console.error('No recepcionistaId found');
      }
    });

    
  }

  setCheckboxes(pago:any): void {
    
    if(pago === 'SI'){
      this.pagoChecked = true;
    }else{
      this.debeChecked = true;
    }
    
    
  }

}
