export interface User {
    name: string;
    status: 'Ativo' | 'Pendente' | 'Bloqueado';
    creationDate: Date;
    lastAccess: Date | null;
  }