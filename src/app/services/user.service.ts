import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
    { name: 'André Souza', status: 'Ativo', creationDate: new Date('2020-10-10'), lastAccess: new Date('2020-10-20 13:00') },
    { name: 'Maria Luíza', status: 'Pendente', creationDate: new Date('2020-10-10'), lastAccess: null },
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

}
