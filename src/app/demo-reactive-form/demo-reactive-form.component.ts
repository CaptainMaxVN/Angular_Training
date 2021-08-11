import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-reactive-form',
  templateUrl: './demo-reactive-form.component.html',
  styleUrls: ['./demo-reactive-form.component.css']
})
export class DemoReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['Captain Max', Validators.compose([ Validators.required, this.skuValidator])],
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value : string) => {
        console.log('sku was changed to: ', value)
      }
    );

    this.myForm.valueChanges.subscribe((value : string) => {
      console.log('myForm was changed to: ', value)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('submitted value: ', value);
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { 'invalidSku': true };
    }
    return {};
  }

  


}
