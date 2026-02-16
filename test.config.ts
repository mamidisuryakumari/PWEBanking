export class TestConfig {
  //User
  baseURL: string = 'http://localhost/bankms/';
  username: string = 'user@gmail.com';
  password: string = 'user@123';

  //userregistration details
  userFirstName = "Surya123";
  userLastName = "M";
  userEmailId = "surya1245@gmail.com";
  userMobileNumber = "9876543210";
  userPassword = "surya@123";

  //user account opening details
  selectAadhaarCard = "Adhar Card";
        userAddressProofIdNumber ="1245 4586 2354 5896";
        userPanCardNumber = "ABCDE1234F";
        userAddress = "Manikonda,Hyderabad";
        userDOB = "1990-12-09";
        userAadhaarCardPath="data/Aadhaarcard.png";
        userPanCardPath = "data/PanCard.png";

  homePageTitle = "e-Banking System";

  userLoginPageTitle = "e-Banking | User Login";

  userRegistrationPageTitle = "e-Banking";

  expectedNewUserText = "Alert ! New User, Account not opend yet";

  userDashBoardPageTitle = "e-Banking | User Dashboard";
  userAccountOpenPageTitle = "e-Banking System";

  userAccountDetailsText = "Account Details";

  userAddPayeePageTitle = "e-Banking | User";

  userRole = "user";
  cashierRole = "cashier";

  //Admin

  adminRole = "admin";
   adminEmail = "admin@gmail.com";
  adminPassword = "admin@123";

  adminLoginPageTitle = "e-Banking | Admin";
  adminDashboardPageTitle = "e-Banking | Dashboard";

  adminNewAccountOpeningRequestPageTitle = "e-Banking System | Admin";

  adminAccountHolderDetailsPageTitle = "e-Banking | Admin";

 // newUserAccountRequestName = "Surya123414";

  takeActionLabelText = "";

  remark = "Account opened";

  approvedStatus = "Approved";

  initialAmount = "10000";

  //Cashier
  cashierEmail = "cashier125";
  cashierPassword = "cashier125";

  cashierDashBoardPageTitle = "e-Banking | Dashboard";
  casshierAccountHoldersPageTitle = "e-Banking | Account Holders";

}