import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateData } from './validators/validators';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  newCardForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', [Validators.maxLength(255)]],
    img: ['', [Validators.required]],
    linkVideo: ['', [Validators.required]],
    date: ['', [Validators.required, ValidateData()]],
  });

  constructor(private fb: FormBuilder, public router: Router) {}

  onSubmit() {
    if (this.newCardForm.status === 'VALID') {
    }
  }

  onReset() {
    this.newCardForm.reset();
  }

  get title() {
    return this.newCardForm.get('title');
  }

  get description() {
    return this.newCardForm.get('description');
  }

  get img() {
    return this.newCardForm.get('img');
  }

  get linkVideo() {
    return this.newCardForm.get('linkVideo');
  }

  get date() {
    return this.newCardForm.get('date');
  }
}
