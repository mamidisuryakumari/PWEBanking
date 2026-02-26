export class TestConfig {
  //User
  baseURL: string = 'http://localhost/bankms/';
  userLoginPageURL: string = 'http://localhost/bankms/user/';
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
  userAddressProofIdNumber = "1245 4586 2354 5896";
  userPanCardNumber = "ABCDE1234F";
  userAddress = "Manikonda,Hyderabad";
  userDOB = "1990-12-09";
  userAadhaarCardPath = "data/Aadhaarcard.png";
  userPanCardPath = "data/PanCard.png";

  homePageTitle = "e-Banking System";

  userLoginPageTitle = "e-Banking | User Login";

  userRegistrationPageTitle = "e-Banking";

  expectedNewUserText = "Alert ! New User, Account not opend yet";

  userDashBoardPageTitle = "e-Banking | User Dashboard";
  userAccountOpenPageTitle = "e-Banking System";

  userAccountDetailsText = "Account Details";

  userAddPayeePageTitle = "e-Banking | User";

  userManagePayeePageTitle = "e-Banking | User";

  userRole = "user";
  cashierRole = "cashier";

  userPayeeAddedSuccessMsg = "Payee / beneficiary Account detail has been added.";
  userAlreadyAddedAlertMsg = "Account Number Already Added";
  userDeletePayeeAlertMsg = "Do you really want to Delete ?";
  userDeletePayeeSecondAlertMsgs = "Data deleted";
  userTransferAmountAlertMsg = "Transaction Details has been updated";
  userLogoutMsg = 'Select "Logout" below if you are ready to end your current session.';

  transferAmount = "100";

  //user profile
  userUpdateFirstName = "User";
  userUpdateLastName = "U";
  UserUpdateMobileNumber = "9963545615";
  userProfileUpdateAlertMsg = "Profile has been updated";
  //Admin

  adminLoginPageURL = "http://localhost/bankms/admin/login.php";

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
  cashierAccountHoldersPageTitle = "e-Banking | Approved Acoounts"

  userAccountNumber = "571991801";
  transactionAlertMsg = "Transcation done successfully";
  cashierUserDetailsPagetitle = "e-Banking System | Cashier";

  depositAmount = "100";
  transactionType = "Cash";

  withdrawAmount = "100";

  cashierTransactionReportPageTitle = "e-Banking | Cashier";
  transactionHistorySuccessMsg = "Transaction History RahulKumar (#873982407 ) from";
  fromDate = "2024-01-01";
  toDate = "2026-02-26";

  selectAccountHolderName = "RahulKumar (#873982407)";


}