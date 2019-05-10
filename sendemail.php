<?php
$name = $_POST['customername'];
$number = $_POST['customernumber'];
$customeremail = $_POST['customeremail'];
$package = $_POST['packageddl'];
$pax = $_POST['pax'];
$message = $_POST['comment'];

if($message == "")
{
    $message ="This person did not leave a message";
}

$to = "razzierazbuzz@gmail.com";
$email_subject = "Booking Enquiry:$package";
$email_body = "You have received a booking enquiry\n ".
"Here are the details:\n Name: $name \n ".
"Email: $customeremail\n Contact No: $number \n Pax Requested: $pax \n Message: $message"  ;
$headers = "From: $customeremail";
$headers = "Reply-To: $customeremail";
mail($to,$email_subject,$email_body,$headers);
?>