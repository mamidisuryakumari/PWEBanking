export class TestContext {
  private userEmail!: string;
  private userPassword!: string;
  private userPayeeAccountHolderName!: string;
  private userPayeeaccountNumber!: string;

  set email(value: string) {
    this.userEmail = value;
  }

  get email(): string {
    return this.userEmail;
  }

  set password(value: string) {
    this.userPassword = value;
  }

  get password(): string {
    return this.userPassword;
  }

  set payeeHolderName(value: string) {
    this.userPayeeAccountHolderName = value;
  }

  get payeeHolderName(): string {
    return this.userPayeeAccountHolderName;
  }

  set payeeAccountNumber(value: string) {
    this.userPayeeaccountNumber = value;
  }

  get payeeAccountNumber(): string {
    return this.userPayeeaccountNumber;
  }
}