<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['aid']==0)) {
  header('location:logout.php');
  } else{
    if(isset($_POST['submit']))
  {
    $aid=$_SESSION['aid'];
   $aname=$_POST['adminname'];
  $mobno=$_POST['mobilenumber'];
  $email=$_POST['email'];
  $sql="update tbladmin set AdminName=:adminname,MobileNumber=:mobilenumber where ID=:aid";
     $query = $dbh->prepare($sql);
     $query->bindParam(':adminname',$aname,PDO::PARAM_STR);
     $query->bindParam(':mobilenumber',$mobno,PDO::PARAM_STR);
     $query->bindParam(':aid',$aid,PDO::PARAM_STR);
$query->execute();

        echo '<script>alert("Profile has been updated")</script>';
     

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

    <title>e-Bankig | Admin Profile</title>

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
                    <h1 class="h3 mb-4 text-gray-800">Profile</h1>

                    <div class="row">

                        <div class="col-lg-8">

                            <!-- Circle Buttons -->
                            

                            <!-- Brand Buttons -->
                            <div class="card shadow mb-6">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Admin Profile</h6>
                                </div>
                                <div class="card-body">
                                   <form class="user" method="post">
                                     <?php
$adminid=$_SESSION['aid'];
$sql="SELECT * from  tbladmin where ID='$adminid'";
$query = $dbh -> prepare($sql);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $row)
{               ?>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Admin Name<label></label></span>
                                        <input type="text" class="form-control form-control-user" id="fname" name="adminname" value="<?php  echo $row->AdminName;?>" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">User Name<label></label></span>
                                    <input type="text" class="form-control form-control-user" id="lname" name="username" value="<?php  echo $row->UserName;?>" readonly="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Email Address<label></label></span>
                                    <input type="email" class="form-control form-control-user" id="email" name="email" 
                                       value="<?php  echo $row->Email;?>" readonly="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Mobile Number<label></label></span>
                                        <input type="text" class="form-control form-control-user"
                                            maxlength="10" pattern="[0-9]+" id="mobilenumber" name="mobilenumber" value="<?php  echo $row->MobileNumber;?>" required="true">
                                    
                                </div>
                                    <div class="form-group row">
                                        <span style="font-size: 18px;color: blue;">Registration Date<label></label></span>
                                            <input type="text" class="form-control form-control-user" name="" value="<?php  echo $row->AdminRegdate;?>" readonly="true">
                                    </div><?php $cnt=$cnt+1;}} ?>
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