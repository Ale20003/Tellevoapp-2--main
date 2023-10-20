import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'
interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  public autenticacion!: boolean;

  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;
  }
  async register(username: string, password: string): Promise<Boolean> {
    const users = await this.local?.get('users') || [];
    const existe = users.find((us: User) => us.username === username && us.password === password);
    if (existe) {
      console.log("Usuario Existente")
      return true;
    } else {
      const nuevo: User = { username, password };
      users.push(nuevo);
      await this.local.set('users', users);
      console.log("Registro Exitoso")
      return false;
    }
  }
  async login(username: string, password: string): Promise<boolean> {
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us: User) => us.username === username && us.password === password);
    if (user) {
      this.autenticacion = true;
      return true;
    }
    this.autenticacion = false;
    return false;
  }
  logout() {
    this.autenticacion = false;
    this.route.navigate(['/home']);
  }
}
