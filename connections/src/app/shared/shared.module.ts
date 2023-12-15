import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { RefreshButComponent } from './components/refresh-but/refresh-but.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LoaderComponent,
    RefreshButComponent,
    ModalComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ToastModule],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    LoaderComponent,
    ToastModule,
    RefreshButComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
