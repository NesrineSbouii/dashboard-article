import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
    loading = false;
    submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm?.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.registerForm?.invalid) {
           return;
       }

       this.loading = true;}

}
