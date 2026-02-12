<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['uid']==0)) {
  header('location:logout.php');
  } else{
    if(isset($_POST['submit']))
  {
    $uid=$_SESSION['uid'];
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
  $mobno=$_POST['mobno'];
  $email=$_POST['email'];
  $sql="update tbluser set FirstName=:fname,LastName=:lname,MobileNumber=:mobno where ID=:uid";
     $query = $dbh->prepare($sql);
     $query->bindParam(':fname',$fname,PDO::PARAM_STR);
     $query->bindParam(':lname',$lname,PDO::PARAM_STR);
     $query->bindParam(':mobno',$mobno,PDO::PARAM_STR);
     $query->bindParam(':uid',$uid,PDO::PARAM_STR);
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

    <title>e-Banking | User</title>

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
                                    <h6 class="m-0 font-weight-bold text-primary">User Profile</h6>
                                </div>
                                <div class="card-body">
                                   <form class="user" method="post">
                                     <?php
$uid=$_SESSION['uid'];
$sql="SELECT * from  tbluser where ID=:uid";
$query = $dbh -> prepare($sql);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $row)
{               ?>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">First Name<label></label></span>
                                        <input type="text" class="form-control form-control-user" id="fname" name="fname" 
                                            value="<?php  echo $row->FirstName;?>" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Last Name<label></label></span>
                                    <input type="text" class="form-control form-control-user" id="lname" name="lname" 
                                        value="<?php  echo $row->LastName;?>" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Email Address<label></label></span>
                                    <input type="email" class="form-control form-control-user" id="email" name="email" 
                                       value="<?php  echo $row->Email;?>" readonly="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Mobile Number<label></label></span>
                                        <input type="text" class="form-control form-control-user"
                                            name="mobno" maxlength="10" pattern="[0-9]+" id="mobno" value="<?php  echo $row->MobileNumber;?>" required="true">
                                    
                                </div>
                                    <div class="form-group row">
                                        <span style="font-size: 18px;color: blue;">Registration Date<label></label></span>
                                            <input type="text" class="form-control form-control-user" value="<?php  echo $row->RegDate;?>" readonly="true">
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