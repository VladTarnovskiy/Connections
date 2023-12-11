import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ButtonComponent, LoaderComponent],
  imports: [CommonModule, FormsModule, RouterModule, ToastModule],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    LoaderComponent,
    ToastModule,
  ],
})
export class SharedModule {}
