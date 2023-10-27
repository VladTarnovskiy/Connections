import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
