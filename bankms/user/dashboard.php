<?php session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['uid']==0)) {
  header('location:logout.php');
  } else{ ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>e-Banking | User Dashboard</title>

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
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <?php include_once('includes/header.php');?>

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="report.php" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <!-- Content Row -->
                    <div class="row">




<?php  $uid=$_SESSION['uid'];
$query = $dbh -> prepare("SELECT  ID from tblaccountdetails where Userid=:uid and AccountNumber!=''");
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

if($query->rowCount() > 0) {

$ret= $dbh -> prepare("SELECT UserID,
sum(case WHEN (Status = 'C' ||  Status = 'I') THEN Amount else 0 END)  camount,
sum(case WHEN Status = 'D' THEN Amount else 0 END)  damount
FROM tbltransaction where UserID=:uid");
      $ret->execute(array(':uid'=> $uid)); 
    $resultss = $ret -> fetchAll(PDO::FETCH_OBJ);
    foreach($resultss as $results){
$camount=$results->camount;
$damount=$results->damount;
}?>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-6 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Available Balance</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800"><?php echo htmlentities($camount-$damount)?></div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

<?php
$query = $dbh -> prepare("SELECT  ID from tblpayee where Userid=:uid");
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$tpayee=$query->rowCount();
   ?>            
                        <!-- Pending Requests Card Example -->
                        <div class="col-xl-6 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                               Manage Payee / Beneficiaries</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800"><?php echo htmlentities($tpayee); ?></div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<?php } else {?>

     <div class="col-xl-6 col-md-6 mb-4">
<div class="alert alert-danger">
  <strong>Alert !</strong> New User, Account not opend yet
</div>
</div>
<?php } ?>
                    </div>

                    <!-- Content Row -->

                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-12 col-lg-7">
                            <div class="card shadow mb-4">
                                <!-- Card Header - Dropdown -->
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Recent Transaction History</h6>
                           
                                </div>
                                <!-- Card Body -->
                                <div class="card-body">
                                    <div class="chart-area">
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
                                        $uid=$_SESSION['uid'];
$query = $dbh -> prepare("SELECT tbltransaction.* from tbltransaction
left join tblaccountdetails on tblaccountdetails.Userid=tbltransaction.userIdRT
 where tbltransaction.UserID=:uid order by tbltransaction.id desc limit 20");
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
                                                    <td><?php  echo htmlentities($row->AccountNumber);?></td>
                                                    <td><?php  echo htmlentities($row->Amount);?></td>
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

    <!-- Logout Modal-->
    

    <!-- Bootstrap core JavaScript-->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="../js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="../vendor/chart.js/Chart.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="../js/demo/chart-area-demo.js"></script>
    <script src="../js/demo/chart-pie-demo.js"></script>

</body>

</html>
<?php } ?>