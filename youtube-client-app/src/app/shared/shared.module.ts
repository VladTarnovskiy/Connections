import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';

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
