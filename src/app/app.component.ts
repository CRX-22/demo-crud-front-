import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import {ClienteService} from "./services/cliente/cliente.service";
import {ProductoService} from "./services/producto/producto.service";
import {FacturaService} from "./services//factura/factura.service";
import {DetalleService} from "./services/detalle/detalle.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  facturaForm!: FormGroup; 
  cliente:any;
  constructor(
    public fb: FormBuilder,
    public clienteService: ClienteService,
    public productoService: ProductoService,
    public facturaService: FacturaService,
    public detalleService: DetalleService

  ){

  }
  ngOnInit(): void {
    this.facturaForm = this.fb.group({
      id_cliente : ['', Validators.required],
      nombre : ['',Validators.required],
      apellido : ['',Validators.required],
      direccion : ['',Validators.required],
      telefono :  ['',Validators.required],
      email : ['',Validators.required],
    })

    this.facturaService.getAllFactura().subscribe(resp=>{
        this.cliente = resp;
        console.log(resp);
    },
    error=>console.error(error)
    )
  }

  guardar(): void{

  }


}

