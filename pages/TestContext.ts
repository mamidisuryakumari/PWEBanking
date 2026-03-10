export class TestContext {
  private userEmail!: string;
  private userPassword!: string;
  private userPayeeAccountHolderName!: string;
  private userPayeeaccountNumber!: string;

  private cEmployeeId!: string;
  private cPassword!: string;

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

  set cashierEmployeeId(value: string) {
    this.cEmployeeId = value;
  }

  get cashierEmployeeId():string{
    return this.cEmployeeId;
  }

  set cashierPassword(value:string){
    this.cPassword = value;
  }

  get cashierPassword():string{
    return this.cPassword;
  }
}