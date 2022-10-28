import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
import { CapturadosComponent } from "./capturados/capturados.component";
import { DialogComponent } from "./dialog/dialog.component";
import { GroupsComponent } from "./groups/groups.component";
import { ListaComponent } from "./lista/lista.component";
import { PokemonsRoutingModule } from "./pokemons-routing.module";

import { MatIconModule } from "@angular/material/icon";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ListarService } from "../services/listar.service";
import { PokemonEffects } from "./effects/pokemon.effects";
import * as fromPokemon from "./reducers/pokemon.reducer";

@NgModule({
  declarations: [
    CapturadosComponent,
    GroupsComponent,
    ListaComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatPaginatorModule,
    StoreModule.forFeature(fromPokemon.pokemonFeatureKey, fromPokemon.reducer),
    EffectsModule.forFeature([PokemonEffects]),
  ],
  entryComponents: [DialogComponent],
})
export class PokemonsModule {}
