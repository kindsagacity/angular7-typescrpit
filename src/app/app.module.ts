import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
=======
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
import { HomeModule } from './home/home.module';
=======
>>>>>>> 9f98e9d53232c7e0c773b28f171ceef6b08ab1f4
import {
  SharedModule
} from './shared';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule
=======
    HomeModule,
    rootRouting,
=======

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
>>>>>>> 9f98e9d53232c7e0c773b28f171ceef6b08ab1f4
    SharedModule
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
