export class TestContext{
    static userEmail:string;
    static userPassword:string;

    static set email(value: string) {
    this.userEmail = value;
  }

  static get email(): string {
    return this.userEmail;
  }

   static set password(value: string) {
    this.userPassword = value;
  }

  static get password(): string {
    return this.userPassword;
  }
}