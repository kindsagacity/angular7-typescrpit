import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
=======
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
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
    SharedModule
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
