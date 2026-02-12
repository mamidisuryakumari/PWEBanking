<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
error_reporting(0);
if (strlen($_SESSION['uid']==0)) {
  header('location:logout.php');
  } else{
if(isset($_POST['submit']))
  {
   
 $uid=$_SESSION['uid'];
  $accountnumber=$_POST['accountnumber'];
  $ahname=$_POST['acountholdername'];
    $ret="select AccountNumber from tblaccountdetails where AccountNumber=:accountnumber and Status='Approved'";
    $query= $dbh -> prepare($ret);
    $query-> bindParam(':accountnumber', $accountnumber, PDO::PARAM_STR);
    $query-> execute();
    $results = $query -> fetchAll(PDO::FETCH_OBJ);
    if($query -> rowCount() == 0)
{
  echo "<script>alert('Invalid Account Number. Please try again');</script>";
  }
else
{
    $query= $dbh -> prepare("select ID from tblpayee where AccountNumber=:accountnumber and Userid=:uid");
    $query->execute(array(':uid'=> $uid,':accountnumber'=> $accountnumber)); 
    $results = $query -> fetchAll(PDO::FETCH_OBJ);
    if($query -> rowCount() > 0)
{
  echo "<script>alert('Account Number Already Added');</script>";
  } else {

$sql="insert into tblpayee(Userid,AccountNumber,acountHolderName)values(:uid,:accountnumber,:ahname)";
    $query = $dbh->prepare($sql);
    $query->bindParam(':uid',$uid,PDO::PARAM_STR);
    $query->bindParam(':accountnumber',$accountnumber,PDO::PARAM_STR);
    $query->bindParam(':ahname',$ahname,PDO::PARAM_STR);
$query->execute();
       $LastInsertId=$dbh->lastInsertId();
   if ($LastInsertId>0) {
    echo '<script>alert("Payee / beneficiary Account detail has been added.")</script>';
echo "<script>window.location.href ='manage-payee.php'</script>";
  }
  else
    {
         echo '<script>alert("Something Went Wrong. Please try again")</script>';
    }
}

}
}

  ?><!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>e-Banking | User</title>

    <!-- Custom fonts for this template-->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">
<script type="text/javascript">
function checkpass()
{
if(document.matchaccountnumber.accountnumber.value!=document.matchaccountnumber.conaccountnumber.value)
{
alert('Both Account number does not match');
document.matchaccountnumber.conaccountnumber.focus();
return false;
}
return true;
}   

</script>

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
                    <h3 class="h3 mb-4 text-gray-800">Add Payee / beneficiary</h3>

                    <div class="row">

                        <div class="col-lg-8">

                            <!-- Circle Buttons -->
                            

                            <!-- Brand Buttons -->
                            <div class="card shadow mb-6">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Payee /  Beneficiary</h6>
                                </div>
<?php $uid=$_SESSION['uid'];
$query= $dbh -> prepare("select * from tblaccountdetails where Userid=:uid");
      $query->execute(array(':uid'=> $uid)); 
    $results = $query -> fetchAll(PDO::FETCH_OBJ);
 foreach ($results as $row) {
 $accounno=$row->AccountNumber;
 }
if($accounno!=''):
?>



                                <div class="card-body">
                                   <form class="user" method="post" onsubmit="return checkpass();" name="matchaccountnumber">
                               
                              
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Account Number<label></label></span>
                                    <input type="password" class="form-control" id="accountnumber" name="accountnumber" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Confirm Account Number<label></label></span>
                                    <input type="text" class="form-control" id="conaccountnumber" name="conaccountnumber" required="true">
                                </div>

                                     <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;"> Account Holder Name<label></label></span>
                                    <input type="text" class="form-control" id="acountholdername" name="acountholdername" required="true">
                                </div>
                             
                                   
                                    <hr>
                                <button name="submit" id="submit" class="btn btn-primary btn-user btn-block">Submit</button>
                                <hr>
                                
                            </form>

                                </div>
<?php else: ?>
<div class="alert alert-danger" role="alert">
Your account not approve yet, After aaproval you can add payee/beneficiary.
</div>

<?php  endif;?>
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