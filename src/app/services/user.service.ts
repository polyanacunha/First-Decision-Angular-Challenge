import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00'), email:'andre@email.com', abbreviation:'AS', color:'#409261' },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
    { name: 'Maria Luíza', status: 'Bloqueado', creationDate: new Date('2020-10-10'), lastAccess: null, email:'maria@email.com', abbreviation:'ML', color:'#F96FD2' },
      ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

}
