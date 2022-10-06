export interface User{
    id: string;
    name: string;
    url: string;
    gender: 'M' | 'F';
    role: string;
    admin: boolean;
  }