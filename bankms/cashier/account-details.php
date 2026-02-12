<?php session_start();
error_reporting(0);
include('includes/dbconnection.php');
if (strlen($_SESSION['cid']==0)) {
  header('location:logout.php');
  } else{

if(isset($_POST['deposit']))
{

$uid=$_GET['userid'];
$actnum=$_GET['actnum'];
$amount=$_POST['amount'];
$ttype=$_POST['ttype'];
$amtstatus=$_POST['status'];
$cid=$_SESSION['cid'];
$txnnumber = random_int(100000000000000, 999999999999999);
$sql="insert into tbltransaction(UserID,AccountNumber,Amount,TransactionType,Status,txnNumber,cashierId)value(:uid,:actnum,:amount,:ttype,:amtstatus,:txnnumber,:cid)";
$query=$dbh->prepare($sql);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->bindParam(':actnum',$actnum,PDO::PARAM_STR);
$query->bindParam(':amount',$amount,PDO::PARAM_STR);
$query->bindParam(':ttype',$ttype,PDO::PARAM_STR);
$query->bindParam(':amtstatus',$amtstatus,PDO::PARAM_STR);
$query->bindParam(':txnnumber',$txnnumber,PDO::PARAM_STR);
$query->bindParam(':cid',$cid,PDO::PARAM_STR);
 $query->execute();

  echo '<script>alert("Transcation done successfully")</script>';
 echo "<script>window.location.href ='approved-accounts.php'</script>";
}
if(isset($_POST['withdraw']))
{

$uid=$_GET['userid'];
$actnum=$_GET['actnum'];
$amount=$_POST['amount'];
$ttype='Cash';
$amtstatus=$_POST['status'];
$cid=$_SESSION['cid'];
$txnnumber = random_int(100000000000000, 999999999999999);

$accountbal=$_POST['accountbalance'];
if($amount>$accountbal){
  echo '<script>alert("Insufficient amount in account")</script>';
 echo "<script>window.location.href ='approved-accounts.php'</script>";

} else{

$sql="insert into tbltransaction(UserID,AccountNumber,Amount,TransactionType,Status,txnNumber,cashierId)value(:uid,:actnum,:amount,:ttype,:amtstatus,:txnnumber,:cid)";
$query=$dbh->prepare($sql);
$query->bindParam(':uid',$uid,PDO::PARAM_STR);
$query->bindParam(':actnum',$actnum,PDO::PARAM_STR);
$query->bindParam(':amount',$amount,PDO::PARAM_STR);
$query->bindParam(':ttype',$ttype,PDO::PARAM_STR);
$query->bindParam(':amtstatus',$amtstatus,PDO::PARAM_STR);
$query->bindParam(':txnnumber',$txnnumber,PDO::PARAM_STR);
$query->bindParam(':cid',$cid,PDO::PARAM_STR);
 $query->execute();

  echo '<script>alert("Transcation done successfully")</script>';
 echo "<script>window.location.href ='approved-accounts.php'</script>";
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

    <title>e-Banking System | Cashier</title>

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
                    <h1 class="h3 mb-2 text-gray-800">Details of User</h1>
                   
                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">View Details of User</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <?php
                                $vid=$_GET['viewid'];
$sql="SELECT tblaccountdetails.ApplyDate,tblaccountdetails.AddressProof,tblaccountdetails.APIDNumber,tblaccountdetails.UAProof,tblaccountdetails.UPCard,tblaccountdetails.PANNum,tblaccountdetails.Address,tblaccountdetails.DOB,tblaccountdetails.TermandCond,tblaccountdetails.AccountNumber,tblaccountdetails.AllottedUserid,tblaccountdetails.Initialamount,tblaccountdetails.Remarks,tblaccountdetails.Status,tblaccountdetails.AllottedDate,tblaccountdetails.ID as afid,tbluser.FirstName,tbluser.LastName,tbluser.MobileNumber,tbluser.Email from tblaccountdetails join tbluser on tbluser.ID=tblaccountdetails.Userid  where tblaccountdetails.ID=:vid";
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
    <th style="color: orange;">Initial Amount</th>
    <td colspan="4"><?php  echo $ia= $row->Initialamount;?></td>
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
    <td>
    <a href="../user/addproofimg/<?php echo htmlentities($row->UAProof);?>" width="100" height="100" target="_blank"> <strong style="color: red">View Address Proof</strong></a></td>
    
  </tr>
  <tr> 
    <th>PAN Number</th>
    <td><?php  echo $row->PANNum;?></td>
    <th>View PAN Card</th>
    <td>
        <a href="../user/pancardimg/<?php echo htmlentities($row->UPCard);?>" width="100" height="100" target="_blank"> <strong style="color: red">View PAN Card</strong></a></td>
    
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

                     <td><?php echo "Not Allotted Yet"; ?></td>
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
    <th>Order Final Status</th>
   <td> <?php  $status=$row->Status;
    
if($row->Status=="Approved")
{
  echo "Your request has been approved";
}

if($row->Status=="Rejected")
{
 echo "Your request has been cancelled";
}


if($row->Status=="")
{
  echo "Not Response Yet";
}


     ;?></td>
    <th>Admin Remark</th>
    <?php if($row->Status==""){ ?>

                     <td  colspan="4"><?php echo "Not Updated Yet"; ?></td>
<?php } else { ?>                  <td><?php  echo htmlentities($row->Remarks);?>
                  </td>
                  <?php } ?>  

  </tr>

  <?php $cnt=$cnt+1;}} ?>
                                            
                                    </table>
         <?php 
$uid=$_GET['userid']; 
   
$query = $dbh -> prepare("select tbltransaction.AccountNumber,tbltransaction.Status as amtsta,tbltransaction.Amount,tbltransaction.TransactionDate,
tbltransaction.TransactionType,tbltransaction.txnNumber

from tbltransaction where tbltransaction.UserID =:uid");
$query->execute(array(':uid'=> $uid)); 
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
 ?>
<table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
  <tr align="center">
   <th colspan="6" style="color: blue" >Transaction History</th> 
  </tr>
  <tr>
    <th>#</th>
    <th>Txn Number</th>
<th>Deposit</th>
<th>Withdraw</th>
<th>Status</th>
<th>Transaction Date</th>
</tr>
<?php  
foreach($results as $row)
{               ?>
<tr>
  <td><?php echo $cnt;?></td>
   <td><?php  echo htmlentities($row->txnNumber);?></td>
 <td><?php if($row->amtsta=='I' || $row->amtsta=='C'):
  echo  $deposit=$row->Amount;
endif;?></td>
 
 <td><?php if($row->amtsta=='D'):
  echo  $withdraw=$row->Amount;
endif;?></td>

  <td><?php  $tstatus=$row->amtsta;
                                                    if($tstatus=='C'): ?>
                                                        <span class="badge badge-success">Credit</span>
                                                        <?php elseif($tstatus=='D'): ?>
                                                        <span class="badge badge-danger">Debit</span>
                                                    <?php elseif($tstatus=='I'): ?>
                                                        <span class="badge badge-warning">Initial Amount Credit</span>
                                                        <?php endif;?></td>
   <td><?php  echo $row->TransactionDate;?></td> 
</tr>
<?php 

$cnt=$cnt+1; } ?>
<tr>
    <th>Account Balance</th>
<?php $ret= $dbh -> prepare("SELECT UserID,
sum(case WHEN (Status = 'C' || Status = 'I') THEN Amount else 0 END)  camount,
sum(case WHEN Status = 'D' THEN Amount else 0 END)  damount
FROM tbltransaction where UserID=:uid");
      $ret->execute(array(':uid'=> $uid)); 
    $resultss = $ret -> fetchAll(PDO::FETCH_OBJ);
    foreach($resultss as $results){
$camount=$results->camount;
$damount=$results->damount;
} ?>


    <th colspan="5"> <span class="badge badge-primary" style="font-size:18px;"><?php echo $accntbalance=$camount-$damount;?></span></th>
</tr>
</table>
                          
                             
                      
 
<p align="center"  style="padding-top: 20px">                            
 <button class="btn btn-primary waves-effect waves-light w-lg" data-toggle="modal" data-target="#myModal">Deposit</button>                        
 <button class="btn btn-primary waves-effect waves-light w-lg" data-toggle="modal" data-target="#myModal1">Withdraw</button></p>  


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

                                <form method="post" name="deposit">

                                
                               
    
    <tr>
    <th>Amount:</th>
    <td>
    <input type="text" name="amount" placeholder="Amount" class="form-control wd-450" required="true">
<input type="hidden" name="status" value="C" class="form-control wd-450" required="true"></td>
  </tr>
  <tr>
    <th>Transaction Type:</th>
    <td>
    <select type="text" name="ttype" class="form-control wd-450" required="true">
        <option value="">Choose Type</option>
        <option value="DD">Demand Draft</option>
        <option value="Cash">Cash</option>
        <option value="Cheque">Cheque</option>
    </select></td>
  </tr>
</table>
</div>
<div class="modal-footer">
 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 <button type="submit" name="deposit" class="btn btn-primary">Update</button>
  
  </form>
  

</div>

                      
                        </div>
                    </div>

                        </div>
               
    <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog" role="document">
     <div class="modal-content">
      <div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel1">Take Action</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
 <div class="modal-body">
<table class="table table-bordered table-hover data-tables">

                                <form method="post" name="withdraw">

                                
                               
    
    <tr>
    <th>Amount Withdraw:</th>
    <td>
         <input type="hidden" name="accountbalance" value="<?php echo htmlentities($accntbalance);?>">
    <input type="text" name="amount" placeholder="Amount" class="form-control wd-450" required="true">
    <input type="hidden" name="status" value="D" class="form-control wd-450" required="true">

</td>
  </tr>

 
</table>
</div>
<div class="modal-footer">
 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 <button type="submit" name="withdraw" class="btn btn-primary">Update</button>
  
  </form>
  

</div>

                      
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
 </div>
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