import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./components/formulario/formulario/formulario.component";
import { ProspectosComponent } from "./components/formulario/prospectos/prospectos.component";
import { HomeComponent } from "./components/home/home.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { USUARIO_ROUTES } from "./components/usuario/usuario.routes";

const APP_ROUTES: Routes = [
  { path: "home", component: ProspectosComponent },
  { path: "crear", component: FormularioComponent },
  { path: "editar/:id", component: FormularioComponent },
  { path: "usuario", component: UsuarioComponent, children: USUARIO_ROUTES },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
