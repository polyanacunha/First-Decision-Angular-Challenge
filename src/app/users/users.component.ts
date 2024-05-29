import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText = '';
  filterStatus = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.applyFilter();
    });
  }

  applyFilter() {
    this.filteredUsers = this.users.filter(user =>
      (this.searchText ? user.name.toLowerCase().includes(this.searchText.toLowerCase()) : true) &&
      (this.filterStatus ? user.status === this.filterStatus : true)
    );
  }

  onSearchTextChange(value: string) {
    this.searchText = value;
    this.applyFilter();
  }

  onStatusFilterChange(value: string) {
    this.filterStatus = value;
    this.applyFilter();
  }
}