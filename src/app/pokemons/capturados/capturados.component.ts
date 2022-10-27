import { Component, OnInit } from "@angular/core";
import { STORE } from "../store/capturados.reducer";

@Component({
  selector: "app-capturados",
  templateUrl: "./capturados.component.html",
  styleUrls: ["./capturados.component.scss"],
})
export class CapturadosComponent implements OnInit {
  capturados: any[] = [];

  public capturados$: any = [];
  constructor() {
    STORE.subscribe(() => (this.capturados$ = STORE.getState()));
  }

  ngOnInit() {}
}
