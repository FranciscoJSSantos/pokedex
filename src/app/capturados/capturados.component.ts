import { Component, OnInit } from "@angular/core";
import { ListarService } from "src/services/listar.service";

@Component({
  selector: "app-capturados",
  templateUrl: "./capturados.component.html",
  styleUrls: ["./capturados.component.scss"],
})
export class CapturadosComponent implements OnInit {
  capturados: any[] = [];
  constructor(public _pokemonService: ListarService) {}

  ngOnInit() {}
}
