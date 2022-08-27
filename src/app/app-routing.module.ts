import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ConverterComponent } from './components/converter/converter.component';

const routes: Routes = [
  {path:'',component:ConverterComponent},
  {path:'about',component:AboutSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
