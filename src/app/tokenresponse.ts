export class TokenResponse {
    access_token: string;
    userName: string;
    expires: string; 
  
    constructor(access_token: string = '', userName: string = '', expires: string = '') {
      this.access_token = access_token;
      this.userName = userName;
      this.expires = expires;
    }
  }
  