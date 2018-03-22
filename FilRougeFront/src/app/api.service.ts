import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iaffaire } from './iaffaire';
import { map } from 'rxjs/operators';
import { Iarme } from './iarme';
import { Iutilisateur } from './iutilisateur';
import { Ivehicule } from './ivehicule';
import { Isuspect } from './isuspect';

@Injectable()
export class ApiService {
  URL: string = 'http://192.168.1.109:8080/api';
  //URL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getAffaires() {
    return this.http.get<Iaffaire[]>(`${this.URL}/affaires`);
  }

  updateAffaire(id, affaire: Iaffaire) {
    return this.http.put<Iaffaire>(`${this.URL}/affaire/${id}`, affaire);
  }

  createAffaire(affaire: Iaffaire) {
    if (affaire.id_affaire == null) {
      return this.http.post<Iaffaire>(`${this.URL}/affaires`, affaire);
    }
  }

  deleteAffaire(id) {
    return this.http.delete<any>(`${this.URL}/affaire/${id}`);
  }

  getUsers() {
    return this.http.get<Iutilisateur[]>(`${this.URL}/utilisateurs`);
  }

  updateUser(id, user: Iutilisateur) {
    return this.http.put<Iutilisateur>(`${this.URL}/utilisateur/${id}`, user);
  }

  createUser(user: Iutilisateur) {
    return this.http.post<Iutilisateur>(`${this.URL}/utilisateurs`, user);
  }

  deleteUser(id) {
    return this.http.delete<any>(`${this.URL}/utilisateur/${id}`);
  }

  getArmes() {
    return this.http.get<Iarme[]>(`${this.URL}/armes`);
  }

  updateArme(id, arme: Iarme) {
    return this.http.put<Iarme>(`${this.URL}/arme/${id}`, arme);
  }

  createArme(arme: Iarme) {
    return this.http.post<Iarme>(`${this.URL}/armes`, arme);
  }

  deleteArme(id) {
    return this.http.delete<any>(`${this.URL}/arme/${id}`);
  }

  getVehicules() {
    return this.http.get<Ivehicule[]>(`${this.URL}/vehicules`);
  }

  updateVehicule(id, vehicule: Ivehicule) {
    return this.http.put<Ivehicule>(`${this.URL}/vehicule/${id}`, vehicule);
  }

  createVehicule(vehicule: Ivehicule) {
    return this.http.post<Ivehicule>(`${this.URL}/vehicules`, vehicule);
  }

  deleteVehicule(id) {
    return this.http.delete<any>(`${this.URL}/vehicule/${id}`);
  }

  getSuspects() {
    return this.http.get<Isuspect[]>(`${this.URL}/suspects`);
  }

  updateSuspect(id, suspect: Isuspect) {
    return this.http.put<Isuspect>(`${this.URL}/suspect/${id}`, suspect);
  }

  createSuspect(suspect: Isuspect) {
    return this.http.post<Isuspect>(`${this.URL}/suspects`, suspect);
  }

  deleteSuspect(id) {
    return this.http.delete<any>(`${this.URL}/suspect/${id}`);
  }
}
