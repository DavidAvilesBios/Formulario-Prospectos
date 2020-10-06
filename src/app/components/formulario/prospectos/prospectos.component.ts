import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AgGridAngular } from "ag-grid-angular";
import { ServicioFormularioService } from "../../servicios/servicio-formulario.service";

@Component({
  selector: "app-prospectos",
  templateUrl: "./prospectos.component.html",
  styleUrls: ["./prospectos.component.css"],
})
export class ProspectosComponent implements OnInit {
  @ViewChild("agGrid") agGrid: AgGridAngular;

  title = "my-app";

  columnDefs = [
    { field: "nombre", sortable: true, filter: true },
    { field: "apellido", sortable: true, filter: true },
    { field: "segundoApellido", sortable: true, filter: true },
    { field: "colonia", sortable: true, filter: true },
    { field: "rfc", sortable: true, filter: true },
    { field: "estatus", sortable: true, filter: true },
  ];

  rowData: any;

  constructor(
    private http: HttpClient,
    private FormularioService: ServicioFormularioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.FormularioService.getData().subscribe((resp: any) => {
      this.rowData = resp.prospectos;
    });
  }

  nuevoProspecto(){
    this.router.navigate(['/crear']);
  }

  editarProspecto() {
    const selectedRows = this.agGrid.api.getSelectedRows();
    console.log(selectedRows[0]._id);
    this.router.navigate(['/editar/',selectedRows[0]._id]);
  }
}
