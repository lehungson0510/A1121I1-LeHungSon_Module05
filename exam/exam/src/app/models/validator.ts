import {formatDate} from '@angular/common';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

export function identityRevealedValidator(control: AbstractControl): ValidationErrors | null {
  const dateStart = control.value.dateStart;
  const dateEnd = control.value.dateEnd;
  const dateImport = control.value.dateImport;
  let date1;
  let date2;
  let date3;
  if (dateStart !== '' && dateEnd !== '' && dateImport !== '') {
    date1 = formatDate(dateStart, 'yyyy-MM-dd', 'en_US');
    date2 = formatDate(dateEnd, 'yyyy-MM-dd', 'en_US');
    date3 = formatDate(dateImport, 'yyyy-MM-dd', 'en_US');
    return (date1 < date2) && (date3 < date2) && (date1 < date3) ? null : {dateError: true};
  }
  return (date1 < date2) && (date3 < date2) && (date1 < date3) ? null : {dateError: false};
}

export function comparePassword(control: AbstractControl): ValidationErrors | null {
  const check = control.value;
  return (check.pass === check.confirmPass) ? null : {passwordNotMatch: true};
}

export function checkEmail(control: FormControl): ValidationErrors | null {
  const check = control.value;
  return (check.includes('an')) ? null : {emailError: true};
}
