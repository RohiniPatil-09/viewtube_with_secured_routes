import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router, private userService: UserService) {
    
  }
  
  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)])      
  }) 
  
  get username(){
    return this.loginForm.get('username');
  }
  
  get password(){
    return this.loginForm.get('password')
  }
  users: any[] = []
  signUp(){
    this.users.push({username: this.loginForm.get('username')?.value, password: this.loginForm.get('password')?.value});
    this.userService.loggedIn = true;
    this.router.navigateByUrl('');
  }
  login(){
    console.warn(this.users);
    this.userService.loggedIn = true;
    this.router.navigateByUrl('');
  }
}
