import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private readonly loginService: LoginService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    
  }

  login() {
    if (this.formLogin.valid) {
      const form = this.formLogin.value;

      this.loginService.login(form).subscribe(res => {
        if (res) {
          this.router.navigate(['/home']);
        } else {
          console.log('não encontrado');
          
        }
      })
    } else {
      console.log('form invalido');
      
    }
  }

}