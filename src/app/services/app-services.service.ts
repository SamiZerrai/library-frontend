import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/book";
import {environment} from "../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AppServices {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient
  ) { }

    public getBooks(): Observable<Book[]> {
      return this.http.get<any>(`${this.apiServerUrl}/books/`)
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.apiServerUrl}/users/`)
  }

}

