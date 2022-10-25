import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListaComponent } from "./lista/lista.component";

import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
import { ListarService } from "src/services/listar.service";
import { CapturadosComponent } from "./capturados/capturados.component";
import { GroupsComponent } from "./groups/groups.component";

import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    GroupsComponent,
    CapturadosComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CommonModule,
  ],
  entryComponents: [DialogComponent],
  providers: [ListarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
