<?php
$dodgy = false;
if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {
  $name = 'No name entered';
  $dodgy = true;
}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {
  $email = 'No email entered';
  $dodgy = true;
}
if ((isset($_POST['message'])) && (strlen(trim($_POST['message'])) > 0)) {
	$message = stripslashes(strip_tags($_POST['message']));
} else {
  $message = 'No message entered';
  $dodgy = true;
}
ob_start();
?>
<html>
  <head>
  <style type="text/css">
  </style>
  </head>
  <body>
    <p>
Hey Dave, <?=$name;?> (<?=$email;?>) sent you a message:
    </p>
    <p>
<?=$message;?>
    </p>
  </body>
</html>

<?php
$body = ob_get_contents();
include_once('class.phpmailer.php');

$mail = new PHPMailer();

$to             = 'dave@dlimiter.net';
$toname         = 'Dave';
$fromaddress    = "formbot@dlimiter.net";
$fromname       = "Online Contact Form (dlimiter.net)";
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host     = "mail.dlimiter.net";
$mail->Username = "formbot+dlimiter.net";
$mail->Password =  "MrFl1bbl3!";
$mail->Port     = 587;

$mail->From     = $fromaddress;
$mail->FromName = $fromname;
$mail->AddAddress($to,$toname);

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Online Contact From Submitted (dlimiter.net)";
$mail->Body     =  $body;

if(!$mail->Send()) {
	$content = $body;	
	echo $mail->ErrorInfo;
  mail($to, $subject, 'Contact form failed', "From: $fromaddress\r\nReply-To: $content\r\nX-Mailer: DT_formmail");
  exit;
}
?>
