import { Component, OnInit, ViewChild } from '@angular/core';
import {Http} from '@angular/http';

import { UserService } from '../../services/user.service';

import { User } from '../../../app/user.model';
import { first } from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

import { Location } from '@angular/common';

declare const swal: any;


export interface Floor {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => { 
          this.loadAllUsers() 
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }
 
}

