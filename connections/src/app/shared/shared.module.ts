import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { RefreshButComponent } from './components/refresh-but/refresh-but.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [ButtonComponent, RefreshButComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule,
    ProgressSpinnerModule,
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule,
    RefreshButComponent,
    ModalComponent,
    ProgressSpinnerModule,
  ],
})
export class SharedModule {}
