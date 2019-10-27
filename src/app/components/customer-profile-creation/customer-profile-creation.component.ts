import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-profile-creation',
  templateUrl: './customer-profile-creation.component.html',
  styleUrls: ['./customer-profile-creation.component.css']
})
export class CustomerProfileCreationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dob: ['', Validators.required],
          gender: ['', Validators.required],
          marital: ['', Validators.required],
          religion: ['', Validators.required],
          community: ['', Validators.required],
          occupation: ['', Validators.required],
          physically_challenged: ['2', Validators.required],
          age_category: ['', Validators.required],
          status: ['1', Validators.required],
          door: ['', Validators.required],
          street: ['', Validators.required],
          village: ['', Validators.required],
          pincode: ['', Validators.required],
          district: ['', Validators.required],
          state: ['', Validators.required],
          same_as_address: [true, Validators.requiredTrue],
          primary_no: ['', Validators.required],
          secondary_no: ['', Validators.required],
          fixed_line: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
