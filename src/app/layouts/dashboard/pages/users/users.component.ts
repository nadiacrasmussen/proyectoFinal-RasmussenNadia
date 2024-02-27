import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, OnDestroy {
  destroy$: Subscription[] = [];
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];

  dataSource: User[] = [];


  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.destroy$.push(
      this.usersService.getUsers().subscribe((users: User[]) => {
        this.dataSource = users;
      })
    );
  }
  ngOnDestroy(): void {
    this.destroy$.forEach((s) => s.unsubscribe());
  }
  onUserSubmitted(ev: User): void {
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }
  onDeleteUser(ev: User): void {
    this.destroy$.push(
      this.usersService.deleteUser(ev.id).subscribe((response: any) => {
        console.log(response);
        if (response) location.reload();
      })
    );
  }

  onEdit(user: User) {
    if (!user) return;
//llamado api editar
  }
}
