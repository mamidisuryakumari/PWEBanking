<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['aid']==0)) {
  header('location:logout.php');
  } else{
    if(isset($_POST['submit']))
  {
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$gender=$_POST['gender'];
$dob=$_POST['dob'];
$address=$_POST['address'];
$eid=$_GET['editid'];
$sql="update tblcashier set FirstName=:fname,LastName=:lname,Gender=:gender,Dob=:dob, Address=:address where tblcashier.ID=:eid";
$query=$dbh->prepare($sql);
$query->bindParam(':fname',$fname,PDO::PARAM_STR);
$query->bindParam(':lname',$lname,PDO::PARAM_STR);
$query->bindParam(':gender',$gender,PDO::PARAM_STR);
$query->bindParam(':dob',$dob,PDO::PARAM_STR);
$query->bindParam(':address',$address,PDO::PARAM_STR);
$query->bindParam(':eid',$eid,PDO::PARAM_STR);
 $query->execute();
   echo '<script>alert("Cashier detail has been updated.")</script>';
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

    <title>e-Banking | Admin Edit cashier Details</title>

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
                    <h1 class="h3 mb-4 text-gray-800">Update Cashier</h1>

                    <div class="row">

                        <div class="col-lg-8">

                            <!-- Circle Buttons -->
                            

                            <!-- Brand Buttons -->
                            <div class="card shadow mb-6">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Update Details of Cashier</h6>
                                </div>
                                <div class="card-body">
                                   <form class="user" method="post">
                                     <?php
                                     $eid=$_GET['editid'];

$sql="SELECT * from tblcashier where ID=:eid";
$query = $dbh -> prepare($sql);
$query->bindParam(':eid',$eid,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $row)
{               ?>
                                <div class="form-group row">
                                    <label style="font-size: 18px;color: blue;">First Name</label>
                                            <input type="text" class="form-control border-none input-flat bg-ash" name="fname" value="<?php  echo htmlentities($row->FirstName);?>">
                                </div>
                                <div class="form-group row">
                                   <label style="font-size: 18px;color: blue;">Last Name</label>
                                            <input type="text" class="form-control border-none input-flat bg-ash" name="lname" value="<?php  echo htmlentities($row->LastName);?>">
                                </div>
                                <div class="form-group row">
                                    <label style="font-size: 18px;color: blue;">Mobile Number</label>
                                            <input type="text" class="form-control border-none input-flat bg-ash" name="mobnum" maxlength="10" pattern="[0-9]+" value="<?php  echo htmlentities($row->MobileNumber);?>" readonly="True">
                                </div>
                                <div class="form-group row">
                                    <label style="font-size: 18px;color: blue;">Email</label>
                                            <input type="email" class="form-control border-none input-flat bg-ash" name="email" value="<?php  echo htmlentities($row->Email);?>" readonly="True">
                                </div>
                                    <div class="form-group row">
                                         <label style="font-size: 18px;color: blue;">Gender*</label>
                                            <select class="form-control bg-ash border-none" name="gender">
                                                <option value="<?php  echo htmlentities($row->Gender);?>"><?php  echo htmlentities($row->Gender);?></option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                    </div>
                                     <div class="form-group row">
                                         <label style="font-size: 18px;color: blue;">Date of Birth</label>
                                            <input type="date" class="form-control calendar bg-ash"  name="dob" value="<?php  echo htmlentities($row->Dob);?>">
                                            <span class="ti-calendar form-control-feedback booking-system-feedback m-t-30"></span>
                                    </div>
                                     <div class="form-group row">
                                         <label style="font-size: 18px;color: blue;">Emp ID</label>
                                            <input type="text" class="form-control border-none input-flat bg-ash" name="empid" value="<?php  echo htmlentities($row->EmpID);?>" readonly="True">
                                    </div>
                                     <div class="form-group row">
                                        <label style="font-size: 18px;color: blue;">Address</label>
                                            <input type="text"  class="form-control border-none input-flat bg-ash" name="address" required="true" value="<?php  echo htmlentities($row->Address);?>">
                                    </div>
                                    <div class="form-group row">
                                        <label style="font-size: 18px;color: blue;">Joining Date</label>
                                            <input type="text" class="form-control border-none input-flat bg-ash" name="" value="<?php  echo htmlentities($row->JoiningDate);?>" readonly="True">
                                    </div>
<?php $cnt=$cnt+1;}} ?>
                                <button name="submit" id="submit" class="btn btn-primary btn-user btn-block">Update</button>
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