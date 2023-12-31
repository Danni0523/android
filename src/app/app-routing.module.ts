import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCostosComponent } from './consultar-costos/consultar-costos.component';
import { CompraEquipoComponent } from './compra-equipo/compra-equipo.component';
import { CostoPlanComponent } from './costo-plan/costo-plan.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'consultar-costos', component: ConsultarCostosComponent },
  { path: 'compra-equipo', component: CompraEquipoComponent },
  { path: 'costo-plan', component: CostoPlanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: '', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
