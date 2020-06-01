import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
<<<<<<< HEAD
import { HomeRoutingModule } from './home-routing.module';
=======

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
