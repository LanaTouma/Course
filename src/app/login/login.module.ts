export class LoginModel {
  userName: string;
  token: string;
  expires: Date;

  constructor(userName: string = '', token: string = '', expires: Date = new Date('01-01-1980')) {
    this.userName = userName;
    this.token = token;
    this.expires = expires;
  }
}
