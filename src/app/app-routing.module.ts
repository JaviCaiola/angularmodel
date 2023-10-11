import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './components/routes/route1/route1.component';
import { ScrollComponent } from './components/routes/scroll/scroll.component';

const routes: Routes = [
  {path: '/', redirectTo: '/home', pathMatch:'full'},
  {path: '/home', component: Route1Component},
  {path: '/scroll-test', component: ScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
