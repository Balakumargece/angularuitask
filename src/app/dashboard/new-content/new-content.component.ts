import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { User } from '../../../app/user.model';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.required],
          mob: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.userForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.userForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('User Creation successful', true);
                  this.router.navigate(['/dashboard/viewcontent']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
 
}
