<?php session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['aid']==0)) {
  header('location:logout.php');
  } else{



  ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>e-Banking | Admin</title>

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
                    <h1 class="h3 mb-2 text-gray-800"><?php echo $_GET['uname'];?>'s Transaction History (#<?php echo $_GET['anumber'];?>)</h1>
                   
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Transaction Details</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                                    <th>Transaction Number</th>
                                                    <th>Received/Sent Account No</th>
                                                    <th>Amount</th>
                                                    <th>Transaction Type</th>
                                                    <th>Status</th>
                                                    <th>Txn Date</th>
                                        </tr>
                                    </thead>
                 
                                    <tbody>
                                        <?php
                                        $uid=intval($_GET['userid']);
$query = $dbh -> prepare("SELECT tbltransaction.*, tblaccountdetails.AccountNumber AS BenAccountNumber from tbltransaction
left join tblaccountdetails on tblaccountdetails.Userid=tbltransaction.userIdRT
 where tbltransaction.UserID=:uid order by tbltransaction.id desc");
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
                                                    <td><?php  echo htmlentities($row->txnNumber);?></td>
                                                    <td>
<?php 
    // Fetch beneficiary account number using userIdRT
    $rt = $row->userIdRT;
    $q2 = $dbh->prepare("SELECT AccountNumber FROM tblaccountdetails WHERE Userid = :rt");
    $q2->bindParam(':rt', $rt, PDO::PARAM_STR);
    $q2->execute();
    $benAcc = $q2->fetchColumn();
    echo htmlentities($benAcc);
?>
</td><td><?php  echo htmlentities($row->Amount);?></td>
                                                    <td><?php  echo htmlentities($row->TransactionType);?></td>
                                                    <td><?php  $tstatus=$row->Status;
                                                    if($tstatus=='C' || $tstatus=='I'): ?>
                                                        <span class="badge badge-success">Credit</span>
                                                        <?php elseif($tstatus=='D'): ?>
                                                        <span class="badge badge-danger">Debit</span>
                                                        <?php endif;?></td>
                                                    <td><?php  echo htmlentities($row->TransactionDate);?></td>
                                             
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