import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidateData(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputValue = control.value as string;
    const parsedDate = Date.parse(inputValue);
    const newDate = String(new Date());
    const currentDate = Date.parse(newDate);

    if (inputValue && currentDate <= parsedDate) {
      return { invalidData: { value: 'trey' } };
    }
    return null;
  };
}
