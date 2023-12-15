import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidateName(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let message = 'username should contains';
    const inputValue = control.value as string;

    if (!/^[a-zA-Z\s]*$/.test(inputValue)) {
      message += 'only letters or spaces';
      return { forbiddenUsername: { value: message } };
    } else {
      return null;
    }
  };
}
