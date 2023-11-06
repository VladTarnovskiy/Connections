import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [ButtonComponent, CommonModule, FormsModule],
})
export class SharedModule {}
