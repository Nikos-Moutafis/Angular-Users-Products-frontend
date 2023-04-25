import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css'],
})
export class UserInsertComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        area: ['', Validators.required],
        road: ['', Validators.required],
      }),
      phone: this.fb.array([this.initPhone()]),
    });
  }
  initPhone(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get phoneControls() {
    return (this.form.get('phone') as FormArray).controls;
  }
}
