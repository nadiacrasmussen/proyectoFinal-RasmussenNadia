import { Component, OnInit,OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  subscription!: Subscription;
  dataSource: User[] = [];

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
  /*  this.subscription = this.usersService.getUsers().subscribe((users) => {
      this.dataSource = users;
    });*/
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
  onUserSubmitted(ev: User): void {
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }
  onDeleteUser(ev: User): void {}
}
