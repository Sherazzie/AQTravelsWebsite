<?php
$name = $_POST['customername'];
$number = $_POST['customernumber'];
$customeremail = $_POST['customeremail'];
$package = $_POST['packageddl'];
$message = $_POST['comment'];

if($message == "")
{
    $message ="This person did not leave a message";
}

$to = "razzierazbuzz@gmail.com";
$email_subject = "AQ Service Enquiry Enquiry:$package";
$email_body = "You have received a service enquiry\n ".
"Here are the details:\n Name: $name \n ".
"Email: $customeremail\n Contact No: $number \n Message: $message"  ;
$headers = "From: $customeremail";
$headers = "Reply-To: $customeremail";
mail($to,$email_subject,$email_body,$headers);
?>