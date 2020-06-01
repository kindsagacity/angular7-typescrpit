import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
=======
    HttpModule,
    RouterModule
>>>>>>> b6b70e6347c8fd052fcd0081678117c54212c5e8
  ]
})
export class SharedModule {}
