import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customNumberValidator(minNumAfterComma:number, maxNumAfterComma: number): ValidatorFn {
  console.log('VAlidator Start')
  return (control: AbstractControl): {[key: string]: any} | null =>{

    const regex = new RegExp(`^\\d+(\\.\\d{${minNumAfterComma},${maxNumAfterComma}})?$`)
    const value = control.value

    if(value === null || value === undefined || value === ''){
      return null
    }
    if(!regex.test(value)){
      return {'invalidFormat' :{value: value}}
    }
    return null
    }
}