import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent, LoaderComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    LoaderComponent,
  ],
})
export class SharedModule {}
