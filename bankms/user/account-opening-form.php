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
  $addproof=$_POST['addproof'];
  $addpidnum=$_POST['addpidnum'];
  $pancardnum=$_POST['pancardnum'];
  $address=$_POST['address'];
  $tandc=$_POST['tandc'];
  $dob=$_POST['dob'];
  $attaddproof=$_FILES["attaddproof"]["name"];
  $uplpancard=$_FILES["uplpancard"]["name"];
  $extension = substr($attaddproof,strlen($attaddproof)-4,strlen($attaddproof));
  $extension1 = substr($uplpancard,strlen($uplpancard)-4,strlen($uplpancard));
$allowed_extensions = array(".jpg","jpeg",".png",".gif",".pdf");
$allowed_extensions1 = array(".jpg","jpeg",".png",".gif",".pdf");
if(!in_array($extension,$allowed_extensions))
{
echo "<script>alert('Address Proof Image has Invalid format. Only jpg / jpeg/ png /gif / pdf format allowed');</script>";
}
if(!in_array($extension1,$allowed_extensions1))
{
echo "<script>alert('Pan Card Image has Invalid format. Only jpg / jpeg/ png /gif / pdf format allowed');</script>";
}
else
{
$attaddproof=md5($attaddproof).time().$extension;
$uplpancard=md5($uplpancard).time().$extension1;

 move_uploaded_file($_FILES["attaddproof"]["tmp_name"],"addproofimg/".$attaddproof);
 move_uploaded_file($_FILES["uplpancard"]["tmp_name"],"pancardimg/".$uplpancard);

$ret="select PANNum from tblaccountdetails where PANNum=:pancardnum";
    $query= $dbh -> prepare($ret);
    $query-> bindParam(':pancardnum', $pancardnum, PDO::PARAM_STR);
    $query-> execute();
    $results = $query -> fetchAll(PDO::FETCH_OBJ);
    if($query -> rowCount() == 0)
{

  $sql="insert into tblaccountdetails(Userid,AddressProof,APIDNumber,UAProof,UPCard,PANNum,Address,DOB,TermandCond)values(:uid,:addproof,:addpidnum,:attaddproof,:uplpancard,:pancardnum,:address,:dob,:tandc)";
     $query = $dbh->prepare($sql);
    $query->bindParam(':uid',$uid,PDO::PARAM_STR);
     $query->bindParam(':addproof',$addproof,PDO::PARAM_STR);
     $query->bindParam(':addpidnum',$addpidnum,PDO::PARAM_STR);
     $query->bindParam(':pancardnum',$pancardnum,PDO::PARAM_STR);
     $query->bindParam(':address',$address,PDO::PARAM_STR);
     $query->bindParam(':tandc',$tandc,PDO::PARAM_STR);
     $query->bindParam(':dob',$dob,PDO::PARAM_STR);
     $query->bindParam(':attaddproof',$attaddproof,PDO::PARAM_STR);
     $query->bindParam(':uplpancard',$uplpancard,PDO::PARAM_STR);
    
$query->execute();

       $LastInsertId=$dbh->lastInsertId();
   if ($LastInsertId>0) {
    echo '<script>alert("Details succesfully submitted.")</script>';
echo "<script>window.location.href ='account-opening-form.php'</script>";
  }
  else
    {
         echo '<script>alert("Something Went Wrong. Please try again")</script>';
    }

  
}
else
{

echo "<script>alert('This PAN number already exist. Please try again');</script>";
}
}
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

    <title>e-Banking System</title>

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
                    <h3 class="h3 mb-4 text-gray-800">Account Details</h3>

                    <div class="row">

                        <div class="col-lg-12">

                            <!-- Circle Buttons -->
                            

                            <!-- Brand Buttons -->

<?php $uid=$_SESSION['uid'];
$query= $dbh -> prepare("select * from tblaccountdetails where Userid=:uid");
      $query->execute(array(':uid'=> $uid)); 
    $results = $query -> fetchAll(PDO::FETCH_OBJ);
    if($query -> rowCount() == 0):

?>

                            <div class="card shadow mb-6">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Account Opening Details</h6>
                                </div>
                                <div class="card-body">
                                   <form class="user" method="post" enctype="multipart/form-data">
                                     
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Address Proof<label></label></span>
                                    <select class="form-control" name="addproof">
                                        <option value="">Choose Address Proof</option>
                                        <option value="Voter ID">Voter ID</option>
                                        <option value="Adhar Card">Adhar Card</option>
                                        <option value="Driving Licence">Driving Licence</option>
                                        <option value="Passport">Passport</option>

                                    </select>
                                        
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Address Proof ID Number<label></label></span>
                                    <input type="text" class="form-control" id="addpidnum" name="addpidnum" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Upload Address Proof<label></label></span>
                                    <input type="file" class="form-control" id="attaddproof" name="attaddproof" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Upload PAN Card<label></label></span>
                                    <input type="file" class="form-control" id="uplpancard" name="uplpancard" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">PAN Card Number<label></label></span>
                                    <input type="text" class="form-control" id="pancardnum" name="pancardnum" required="true">
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Address<label></label></span>
                                    <textarea class="form-control" name="address" required="true"></textarea>
                                    
                                </div>
                                <div class="form-group row">
                                    <span style="font-size: 18px;color: blue;">Date of Birth<label></label></span>
                                    <input type="date" class="form-control" id="dob" name="dob" required="true">
                                </div>
                                    <input type="checkbox" id="tandc" name="tandc" value="1" required="true"><span style="padding-left: 10px;"><strong>Accept the term & condition</strong></span>
                                    <hr>
                                <button name="submit" id="submit" class="btn btn-primary btn-user btn-block">Submit</button>
                                <hr>
                                
                            </form>

                                </div>
                            </div>
<?php else: ?>



<div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">User Details</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                             
                              <?php foreach ($results as $result): ?>
                                 
                             
                                    <tbody>
                                        <tr>
                                            <th>Address Proof</th>
                                            <td><?php echo htmlentities($result->AddressProof)?></td>
                                            <th>Address Proof Id</th>
                                            <td><?php echo htmlentities($result->APIDNumber)?></td>
                                        </tr>
                                  <tr>
                                            <th>Address Proof File</th>
                                            <td><a href="addproofimg/<?php echo htmlentities($result->UAProof)?>" target="_blank"> Click Here </a></td>
                                            <th>Pancard</th>
                                            <td><?php echo htmlentities($result->PANNum)?><br />
                                                <small><a href="pancardimg/<?php echo htmlentities($result->UPCard)?>" target="_blank"> View Pan card</a></small>

                                            </td>
                                        </tr>
                                           <tr>
                                            <th>DOB <small>(Date of Birth)</small></th>
                                            <td><?php echo htmlentities($result->DOB)?></td>
                                            <th>Address</th>
                                            <td><?php echo htmlentities($result->Address)?></td>
                                        </tr>
                                           <tr>
                                            <th>Apply Date</th>
                                            <td><?php echo htmlentities($result->ApplyDate)?></td>
                                                <th>Account  Status</th>
   <td> <?php  $status=$result->Status; 
    
if($status=="Approved")
{ ?>
    <span class="badge badge-success">Approved</span>

<?php } elseif($status=="Rejected") { ?>

<span class="badge badge-danger">Rejected</span>
 <?php } elseif($status=="") { ?>
<span class="badge badge-danger">New Request</span>
<?php };?></td>
                                        </tr>
<?php if($status=="Approved"):?>
<tr>
    <th colspan="4" style="color:blue">Account Details</th>
</tr>

       </tr>
                                           <tr>
                                            <th>Account Number</th>
                                            <td><span class="badge badge-primary"><?php echo htmlentities($result->AccountNumber)?></span></td>
                                             <th>User Id </th>
                                            <td><span class="badge badge-dark"><?php echo htmlentities($result->AllottedUserid)?></span></td>
                                        </tr>
                                        <tr> <th>Initial Amount</th>
                                            <td><?php echo htmlentities($result->Initialamount)?></td></tr>

                                 <?php endif;?>
                                    </tbody>

                                <?php endforeach; ?>
                                </table>
                            </div>
                        </div>
                    </div>
<?php endif;?>





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