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
                    <h1 class="h3 mb-2 text-gray-800">Account Report</h1>
                   
<div class="card shadow mb-6">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">B/w Dates Account Report</h6>
                                </div>
                                <div class="card-body">
                                   <form class="user" method="post" name="report">
                                     
                                <div class="form-group">
                                    <span style="font-size: 18px;color: blue;">From Date<label></label></span>
                                        <input type="date" class="form-control form-control-user" id="fromdate" name="fromdate" required="true">
                                </div>
                                <div class="form-group">
                                    <span style="font-size: 18px;color: blue;">To Date<label></label></span>
                                    <input type="date" class="form-control form-control-user" id="todate" name="todate" required="true">
                                </div>
                     
                            
                                   
                                <button name="submit" id="submit" class="btn btn-primary">Submit</button>
                                <hr>
                                
                            </form>

                                </div>
                            </div>

<?php if (isset($_POST['submit'])) { 
$fdate=$_POST['fromdate'];
$tdate=$_POST['todate'];

    ?>


                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h5 class="m-0 font-weight-bold text-primary" align="center">Acounts Report from <?php echo date("d-m-Y", strtotime($fdate));?> to <?php echo date("d-m-Y", strtotime($tdate)); ?></h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                             <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Mobile Number</th>
                                                <th>Email</th>
                                                <th>Apply Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>Mobile Number</th>
                                                <th>Email</th>
                                                <th>Apply Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                    </tfoot>
                                    <tbody>
                                       <?php
$sql="SELECT tblaccountdetails.ApplyDate,tblaccountdetails.ID as afid,tblaccountdetails.Status,tbluser.ID as userid,tbluser.FirstName,tbluser.LastName,tbluser.MobileNumber,tbluser.Email from tblaccountdetails join tbluser on tbluser.ID=tblaccountdetails.Userid where date(ApplyDate) between :fdate and :tdate";
$query = $dbh -> prepare($sql);
$query->bindParam(':fdate',$fdate,PDO::PARAM_STR);
$query->bindParam(':tdate',$tdate,PDO::PARAM_STR);
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
                                                    <td><?php  echo htmlentities($row->ApplyDate);?></td>
                   <td> <?php  $status=$row->Status; 
    
if($status=="Approved")
{ ?>
    <span class="badge badge-success">Approved</span>

<?php } elseif($status=="Rejected") { ?>

<span class="badge badge-danger">Rejected</span>
 <?php } elseif($row->Status=="") { ?>
<span class="badge badge-danger">New Request</span>
<?php };?></td>
                                                   
                                                    <td><a href="view-request-details.php?userid=<?php echo htmlentities ($row->userid);?>&&viewid=<?php echo htmlentities ($row->afid );?>" class="btn btn-info" target="_blank">View </a></td>
                                                </tr>
                                              <?php $cnt=$cnt+1;}} ?> 
                                        
                                    </tbody>
                                </table>                            </div>
                        </div>
                    </div>
<?php } ?>
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