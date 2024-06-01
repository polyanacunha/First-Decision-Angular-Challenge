import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText = '';
  filterStatus = '';
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter() {
    this.dataSource.data = this.users.filter(user =>
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
  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '750px',
      height: '570px'
    });
  }
}