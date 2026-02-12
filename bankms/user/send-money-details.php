<?php session_start();
//error_reporting(0);
include('includes/dbconnection.php');
error_reporting(0);
if (strlen($_SESSION['uid']==0)) {
  header('location:logout.php');
  } else{

// Tarnasfer Amount    
if(isset($_POST['submit']))
{
$txnnumber = random_int(100000000000000, 999999999999999);
$actholderid=$_GET['actholderid'];
$actnum=$_GET['actnum'];
$amount=$_POST['amount'];
$ttype='Online Transfer';
$amtstatus='C';
$accountbal=$_POST['accountbalance'];
if($amount>$accountbal){
  echo '<script>alert("Insufficient amount in account")</script>';
 echo "<script>window.location.href ='manage-payee.php'</script>";

} else{
$uid=$_SESSION['uid'];
$sql="insert into tbltransaction(UserID,AccountNumber,Amount,TransactionType,Status,userIdRT,txnNumber)value(:actholderid,:actnum,:amount,:ttype,:amtstatus,:uid,:txnnumber)";
$query=$dbh->prepare($sql);
$query->bindParam(':actholderid',$actholderid,PDO::PARAM_STR);
$query->bindParam(':actnum',$actnum,PDO::PARAM_STR);
$query->bindParam(':amount',$amount,PDO::PARAM_STR);
$query->bindParam(':ttype',$ttype,PDO::PARAM_STR);
$query->bindParam(':amtstatus',$amtstatus,PDO::PARAM_STR);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->bindParam(':txnnumber',$txnnumber,PDO::PARAM_STR);
 $query->execute();

echo '<script>alert("Transaction Details has been updated")</script>';
 echo "<script>window.location.href ='manage-payee.php'</script>";


$fromactnum=$_POST['fromaccountno'];
$amount=$_POST['amount'];
$amtstatus='D';

$sql="insert into tbltransaction(UserID,AccountNumber,Amount,Status,TransactionType,userIdRT,txnNumber)value(:uid,:actnum,:amount,:amtstatus,:ttype,:actholderid,:txnnumber)";
$query=$dbh->prepare($sql);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->bindParam(':actnum',$fromactnum,PDO::PARAM_STR);
$query->bindParam(':amount',$amount,PDO::PARAM_STR);
$query->bindParam(':ttype',$ttype,PDO::PARAM_STR);
$query->bindParam(':amtstatus',$amtstatus,PDO::PARAM_STR);
$query->bindParam(':actholderid',$actholderid,PDO::PARAM_STR);
$query->bindParam(':txnnumber',$txnnumber,PDO::PARAM_STR);
 $query->execute();

  echo '<script>alert("Transcation Details has been updated")</script>';
 echo "<script>window.location.href ='txn-history.php'</script>";
}}
  ?><!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>e-Banking | Admin</title>

    <!-- Custom fonts for this template-->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">


</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
       <?php include_once('includes/sidebar.php');?>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

               <?php include_once('includes/header.php');?>
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h3 class="h3 mb-4 text-gray-800">Transfer Amount</h3>

                    <div class="row">

                        <div class="col-lg-8">

                            <!-- Circle Buttons -->
                            

                            <!-- Brand Buttons -->
                            <div class="card shadow mb-6">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Fill the Amount </h6>
                                </div>
                                <div class="card-body">
                                   <form class="user" method="post">
                                     <div class="form-group row">
                                <span style="font-size: 20px;color: blue;">Account Balance:
                                    
                            <?php  $uid=$_SESSION['uid'];
                            $ret= $dbh -> prepare("SELECT UserID,
sum(case WHEN (Status = 'C' || Status = 'I') THEN Amount else 0 END)  camount,
sum(case WHEN Status = 'D' THEN Amount else 0 END)  damount
FROM tbltransaction where UserID=:uid");
      $ret->execute(array(':uid'=> $uid)); 
    $resultss = $ret -> fetchAll(PDO::FETCH_OBJ);
    foreach($resultss as $results){

 $camount=$results->camount;
$damount=$results->damount;

    }?>
<font size="4" color="#000"><?php echo htmlentities($accntbalance=$camount-$damount); ?></font>
                                   </span>
                                </div>
                                <input type="hidden" name="accountbalance" value="<?php echo htmlentities($accntbalance);?>">
                                
                              
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Amount<label></label></span>
                                    
                                    <input type="text" name="amount" autocomplete="off" placeholder="Amount" class="form-control" required="true" pattern="[0-9]+" title="only numbers">
                                   
                                </div>
                              
                         <?php
$query= $dbh -> prepare("select * from tblaccountdetails where Userid=:uid");
      $query->execute(array(':uid'=> $uid)); 
    $results = $query -> fetchAll(PDO::FETCH_OBJ);
foreach($results as $result)
$fromAccountNumber=$result->AccountNumber;
    ?>    
      <input type="hidden" name="fromaccountno" autocomplete="off" class="form-control" required="true" value="<?php echo htmlentities($fromAccountNumber);?>">
                                   
                                    <hr>
                                <button name="submit" id="submit" class="btn btn-primary btn-user btn-block">Submit</button>
                                <hr>
                                
                            </form>

                                </div>
                            </div>

                        </div>

                      

                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <?php include_once('includes/footer.php');?>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

   

    <!-- Bootstrap core JavaScript-->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../js/sb-admin-2.min.js"></script>

</body>

</html><?php }  ?>