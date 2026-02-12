<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['uid']==0)) {
  header('location:logout.php');
  } else{

if(isset($_GET['delid']))
{
$rid=intval($_GET['delid']);
$sql="delete from tblpayee where ID=:rid";
$query=$dbh->prepare($sql);
$query->bindParam(':rid',$rid,PDO::PARAM_STR);
$query->execute();
 echo "<script>alert('Data deleted');</script>"; 
  echo "<script>window.location.href = 'manage-payee.php'</script>";     


}

  ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>e-Banking | User</title>

    <!-- Custom fonts for this template -->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">

    <!-- Custom styles for this page -->
    <link href="../vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <?php include_once('includes/sidebar.php');?>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
              <?php include_once('includes/header.php');?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">Manage Payee</h1>
                   
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Manage Payee</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                                    <th>Name of Payee</th>
                                                    <th>Mobile Number</th>
                                                    <th>Email</th>
                                                    <th>Account Number</th>
                                                    <th>Creation Date</th>
                                                    <th>Action</th>
                                        </tr>
                                    </thead>
                 
                                    <tbody>
                                        <?php
                                        $uid=$_SESSION['uid'];
$sql="SELECT tblaccountdetails.AccountNumber as sactnum,tblaccountdetails.Userid as actholdeid,tblpayee.ID as pid,tblpayee.AccountNumber as payeeactnum,tblpayee.CreationDate,tblpayee.Userid as senderuid,tbluser.FirstName,tbluser.LastName,tbluser.MobileNumber,tbluser.Email from tblpayee join tblaccountdetails on tblaccountdetails.AccountNumber=tblpayee.AccountNumber join tbluser on tblaccountdetails.Userid=tbluser.ID where tblpayee.Userid=:uid";
$query = $dbh -> prepare($sql);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $row)
{               ?>
                                                    <tr>
                                                    <td><?php echo htmlentities($cnt);?></td>
                                                    <td><?php  echo htmlentities($row->FirstName);?> <?php  echo htmlentities($row->LastName);?></td>
                                                    <td><?php  echo htmlentities($row->MobileNumber);?></td>
                                                    <td><?php  echo htmlentities($row->Email);?></td>
                                                    <td><?php  echo htmlentities($row->payeeactnum);?></td>
                                                    <td><?php  echo htmlentities($row->CreationDate);?></td>
                                                    <td><a href="manage-payee.php?delid=<?php echo ($row->pid);?>"  onclick="return confirm('Do you really want to Delete ?');" class="btn btn-danger btn-sm">Delete</a>

                                                        <a href="send-money-details.php?payeeid=<?php echo ($row->pid);?>&&actholderid=<?php echo htmlentities ($row->actholdeid );?>&&actnum=<?php echo htmlentities ($row->payeeactnum );?>&&sactnum=<?php echo htmlentities ($row->sactnum );?>"  class="btn btn-success btn-sm">Transfer</a></span></td>
                                                </tr>
                                              <?php $cnt=$cnt+1;}} ?> 
                                        
                                    </tbody>
                                </table>
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

    <!-- Page level plugins -->
    <script src="../vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="../vendor/datatables/dataTables.bootstrap4.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="../js/demo/datatables-demo.js"></script>

</body>

</html><?php }  ?>