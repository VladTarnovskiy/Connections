import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [ButtonComponent, CommonModule, FormsModule],
})
export class SharedModule {}
