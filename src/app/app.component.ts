import {Component, OnInit} from '@angular/core';
import {Book} from "./models/book";
import {AppServices} from "./services/app-services.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public books: Book[] | undefined;
  public users: User[] | undefined;
  constructor(private appService: AppServices) {
  }

  ngOnInit() {
    this.getBooks();
    this.getUsers();
  }

  public getBooks(): void {
    this.appService.getBooks().subscribe(
      (response: Book[]) =>
      {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public getUsers(): void {
    this.appService.getUsers().subscribe(
      (response: User[]) =>
      {
        console.log(this.users)
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
