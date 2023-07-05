
<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
// $database_name="c-maint";
$conn = mysqli_connect('localhost', 'id19377468_cmaintteam', '5@Shiftsssssss','id19377468_cmaint');

if(!$conn){
    echo '<script type="text/javascript">
       window.onload = function () { alert("not connected to database"); } 
</script>'; 
    
}


// get the post records
$name = $_POST['name'];
$mail = $_POST['mail'];
$pw = $_POST['pw'];
$checkuser="SELECT * FROM `c-maint`where Email = '$mail'";
$result = mysqli_query($conn,$checkuser);
$count = mysqli_num_rows($result);

if ($count>0){
	echo '<script type="text/javascript">
	window.onload = function () { alert("user already signed up"); } 
		</script>'; 
    die;
}
else{


// database insert SQL code
	$sql = "INSERT INTO `c-maint`(`Name`, `Email`, `Password`)  VALUES ('$name', '$mail', '$pw')";

	// insert in database 


	if($conn->query($sql)){

		echo '<script type="text/javascript">
		window.onload = function () { alert("Registed Sucessfully"); } 
	</script>'; 
	}
	else{
		echo '<script type="text/javascript">
		window.onload = function () { alert("User not added"); } 
	</script>'; 
	}
}

?>