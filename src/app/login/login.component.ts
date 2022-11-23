import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }


  onSubmit() {
    if(!this.email && !this.password) return;

    this.loading = true
    this.submitted = true
    this.loginService.login(this.email?.value, this.password?.value)
      .subscribe(arg => {
        this.loading = false
        this.router.navigate(['/home'])
      });
  }   
}

