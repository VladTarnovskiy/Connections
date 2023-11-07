import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ButtonComponent, CommonModule, FormsModule, RouterModule],
})
export class SharedModule {}
