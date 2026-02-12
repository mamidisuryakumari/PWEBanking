<?php session_start();
//error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['aid']==0)) {
  header('location:logout.php');
  } else{
  if(isset($_POST['submit']))
  {
    $vid=$_GET['viewid'];
    $uid=$_GET['userid'];
    $accountnumber = mt_rand(100000000, 999999999);
    $actuserid = mt_rand(100000000, 999999999);
    $status=$_POST['status'];
   $remark=$_POST['remark'];
   $initialamt=$_POST['iniamt'];
   $amtstatus='I'; 
   $ttype='Initial Amount';
   $txnnumber = random_int(100000000000000, 999999999999999);
   $sql="insert into tbltransaction(UserID,AccountNumber,Amount,Status,TransactionType,txnNumber)value(:uid,:accountnumber,:initialamt,:amtstatus,:ttype,:txnnumber)";
   $query=$dbh->prepare($sql);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->bindParam(':accountnumber',$accountnumber,PDO::PARAM_STR);
$query->bindParam(':initialamt',$initialamt,PDO::PARAM_STR);
$query->bindParam(':amtstatus',$amtstatus,PDO::PARAM_STR);
$query->bindParam(':ttype',$ttype,PDO::PARAM_STR);
$query->bindParam(':txnnumber',$txnnumber,PDO::PARAM_STR);
 $query->execute();

$sql= "update tblaccountdetails set Status=:status,Remarks=:remark,AccountNumber=:accountnumber,AllottedUserid=:actuserid,Initialamount=:initialamt where ID=:vid";
$query=$dbh->prepare($sql);
$query->bindParam(':status',$status,PDO::PARAM_STR);
$query->bindParam(':remark',$remark,PDO::PARAM_STR);
$query->bindParam(':actuserid',$actuserid,PDO::PARAM_STR);
$query->bindParam(':accountnumber',$accountnumber,PDO::PARAM_STR);
$query->bindParam(':initialamt',$initialamt,PDO::PARAM_STR);
$query->bindParam(':vid',$vid,PDO::PARAM_STR);
$query->execute();

  echo '<script>alert("Remark has been updated")</script>';
 echo "<script>window.location.href ='new-request.php'</script>";
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
                    <h1 class="h3 mb-2 text-gray-800"> Account Holder Details</h1>
                   
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary"> Details</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <?php
                                $vid=$_GET['viewid'];
$sql="SELECT tblaccountdetails.ApplyDate,tblaccountdetails.AddressProof,tblaccountdetails.APIDNumber,tblaccountdetails.UAProof,tblaccountdetails.UPCard,tblaccountdetails.PANNum,tblaccountdetails.Address,tblaccountdetails.DOB,tblaccountdetails.TermandCond,tblaccountdetails.AccountNumber,tblaccountdetails.AllottedUserid,tblaccountdetails.Initialamount,tblaccountdetails.Remarks,tblaccountdetails.Status,tblaccountdetails.AllottedDate,tblaccountdetails.ID as afid,tbluser.FirstName,tbluser.LastName,tbluser.MobileNumber,tbluser.Email from tblaccountdetails join tbluser on tbluser.ID=tblaccountdetails.Userid where tblaccountdetails.ID=:vid";
$query = $dbh -> prepare($sql);
$query-> bindParam(':vid', $vid, PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $row)
{               ?>
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <tr>
    <th style="color: orange;" colspan="4">User Details</th>
  </tr>
  <tr>
    <th>Name</th>
    <td><?php  echo $row->FirstName;?> <?php  echo $row->LastName;?></td>
    <th>Email</th>
    <td><?php  echo $row->Email;?></td>
     
    
  </tr>
   <tr>
    <th>Mobile Number</th>
    <td><?php  echo $row->MobileNumber;?></td>
    <th>Address Proof</th>
    <td><?php  echo $row->AddressProof;?></td>
    
  </tr>
  <tr>
    <th>Address Proof IDNumber</th>
    <td><?php  echo $row->APIDNumber;?></td>
    <th>View Address Proof</th>
    <td><a href="../user/addproofimg/<?php echo htmlentities($row->UAProof);?>" width="100" height="100" target="_blank"> <strong style="color: red">View Address Proof</strong></a></td>
    
  </tr>
  <tr> 
    <th>PAN Number</th>
    <td><?php  echo $row->PANNum;?></td>
    <th>View PAN Card</th>
    <td><a href="../user/pancardimg/<?php echo htmlentities($row->UPCard);?>" width="100" height="100" target="_blank"> <strong style="color: red">View PAN Card</strong></a></td>
    
  </tr>
  <tr> 
    <th>Address</th>
    <td><?php  echo $row->Address;?></td>
    <th>Date of Birth</th>
    <td><?php  echo $row->DOB;?></td>
    
  </tr>
  <tr> 
    <th >Term and Condition</th>
    <?php if($row->TermandCond=="1"){ ?>

                     <td><?php echo "Term and Condition Accepted"; ?></td>
<?php } ?>
    <th>Apply Date</th>
    <td><?php  echo $row->ApplyDate;?></td>
    
  </tr>
  <tr>
    <th >Account Number</th>
    <?php if($row->AccountNumber==""){ ?>

                     <td><span class="badge badge-danger">Not Allotted Yet</span></td>
<?php } else { ?>                  <td><?php  echo htmlentities($row->AccountNumber);?>
                  </td>
                  <?php } ?>  
                 <th >Allotted Userid</th>
    <?php if($row->AllottedUserid==""){ ?>

                     <td><?php echo "Not Allotted Yet"; ?></td>
<?php } else { ?>                  <td><?php  echo htmlentities($row->AllottedUserid);?>
                  </td>
                  <?php } ?>    
    
  </tr>

   <tr>
    <th>Account Final Status</th>
   <td> <?php  $status=$row->Status; 
    
if($status=="Approved")
{ ?>
    <span class="badge badge-success">Approved</span>

<?php } elseif($status=="Rejected") { ?>

<span class="badge badge-danger">Rejected</span>
 <?php } elseif($row->Status=="") { ?>
<span class="badge badge-danger">New Request</span>
<?php };?></td>
<th>Admin Remark</th>
<?php if($row->Status==""){ ?>
<td  colspan="4"><?php echo "Not Updated Yet"; ?></td>
<?php } else { ?> 
<td><?php  echo htmlentities($row->Remarks);?>
                  </td>
                  <?php } ?>  

  </tr>

  <?php $cnt=$cnt+1;}} ?>
                                            
                                    </table>
                                    
                                <?php 

if ($status==""){
?> 
<p align="center"  style="padding-top: 20px">                            
 <button class="btn btn-primary waves-effect waves-light w-lg" data-toggle="modal" data-target="#myModal">Take Action</button></p>  

<?php } ?>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
     <div class="modal-content">
      <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Take Action</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                <table class="table table-bordered table-hover data-tables">

                                <form method="post" name="submit">

                                
                               
     <tr>
    <th>Remark :</th>
    <td>
    <textarea name="remark" placeholder="Remark" rows="6" cols="14" class="form-control wd-450" required="true"></textarea></td>
  </tr> 

    
 
  <tr>
    <th>Status :</th>
    <td>
   <select name="status" id="status" class="form-control wd-450" required="true" >
    <option value="">Select</option>
     <option value="Approved">Approved</option>
     <option value="Rejected">Rejected</option>
   </select></td>
  </tr>

  <tr id="intialamt">
    <th>Initial Amount :</th>
    <td>
    <input type="text" name="iniamt" placeholder="Initial Amount" rows="12" cols="14" class="form-control wd-450" required="true" id="iniamt"></td>
  </tr>
</table>
</div>
<div class="modal-footer">
 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 <button type="submit" name="submit" class="btn btn-primary">Update</button>
  
  </form>
  

</div>

                      
                        </div>
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
    <script type="text/javascript">

  //For report file
  $('#intialamt').hide();
  $(document).ready(function(){
  $('#status').change(function(){
  if($('#status').val()=='Approved')
  {
  $('#intialamt').show();
  jQuery("#iniamt").prop('required',true);  
  }
  else{
  $('#intialamt').hide();
    jQuery("#iniamt").prop('required',false);  
  }
})}) 
</script>

</body>

</html><?php }  ?>