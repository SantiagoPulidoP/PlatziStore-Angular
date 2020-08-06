import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 10000 || value === 0) {
      return { price_invalid: true };
    }
    return null;
  }

  static minDescription(control: AbstractControl) {
    const desc = control.value;
    if (desc.toString().length < 5) {
      return { size_invalid: true };
    }
    return null;
  }
}
