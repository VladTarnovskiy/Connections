import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateData } from './validators/validators';
import { Store } from '@ngrx/store';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';
import { v4 as uuidv4 } from 'uuid';

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
    tags: this.fb.array([this.fb.control('', Validators.required)]),
  });

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private store: Store
  ) {}

  onSubmit() {
    if (this.newCardForm.status === 'VALID') {
      this.router.navigate(['/youtube']);
      this.store.dispatch(
        CardsActions.AddCustomCard({
          customCard: {
            ...this.newCardForm.getRawValue(),
            id: uuidv4() as string,
          },
        })
      );
    }
  }

  onReset() {
    const fieldsArray = this.newCardForm.get('tags') as FormArray;
    fieldsArray.clear();
    fieldsArray.push(this.fb.control('', Validators.required));
    this.newCardForm.reset();
  }

  addTag() {
    if ((this.newCardForm.get('tags') as FormArray).length < 5) {
      const fieldsArray = this.newCardForm.get('tags') as FormArray;
      fieldsArray.push(this.fb.control('', Validators.required));
    }
  }

  getControls() {
    return (this.newCardForm.get('tags') as FormArray).controls;
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
