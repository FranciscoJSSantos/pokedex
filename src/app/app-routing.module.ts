import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupsComponent } from "./groups/groups.component";
import { ListaComponent } from "./lista/lista.component";

const routes: Routes = [{ path: "", component: GroupsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}