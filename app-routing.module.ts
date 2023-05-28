import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoEmAndamentoComponent } from "./curso-em-andamento/curso-em-andamento.component";

const routes: Routes = [
  { path: "cursoEmAndamento", component: CursoEmAndamentoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
