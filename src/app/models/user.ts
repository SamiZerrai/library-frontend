import {Book} from "./book";

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  email: string;
  password: string;
  books: Array<Book>;
}
