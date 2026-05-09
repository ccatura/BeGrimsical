<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$config = require 'config.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    
    // --- NEW: USE THE VARIABLES FROM CONFIG.PHP ---
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $email = $_POST['email'];
    $name = $_POST['name'];
    $good_to_go = $_POST['good-to-go'];

    if($good_to_go == 'true') {
        $subject = $_POST['subject'];
        $message = "New message from BeGrimsical.com from <strong>" . $name . "</strong> (" . $email . ")<br><hr>";
        $message .= $_POST['message'];
        
        $mail->setFrom($config['smtp_user'], 'BeGrimsical Website');
        $mail->addAddress('begrimsical@gmail.com');
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;

        $mail->send();
        echo "<h1>Your message was sent successfully!</h1><h3><a href='#' onclick='window.close();return false;'>Click here to close this tab.</a></h3>";
    } else {
        http_response_code(404);
        die();
    }
} catch (Exception $e) {
    echo "<h1>Message could not be sent.</h1><p>Error: {$mail->ErrorInfo}</p>";
}

















    // $to = "begrimsical@gmail.com";
    // $email = $_POST['email'];
    // $name = $_POST['name'];
    // $good_to_go = $_POST['good-to-go'];

    // $header[] = "From: no-reply@begrimsical.com";
    // $header[] = "MIME-Version: 1.0";
    // $header[] = "Content-type: text/html";

    // if($good_to_go == 'true') {
    //     $subject = $_POST['subject'];
    //     $message .= "New message from BeGrimsical.com from <strong>" . $name . "</strong> (" . $email . ")<br><hr>";
    //     $message .= $_POST['message'];
    // } else {
    //     http_response_code(404);
    //     die();
    // }


    // $sendmail = mail($to, $subject, $message, implode("\r\n", $header));

    // if( $sendmail == true ) {
    //     echo "<h1>Your message was sent successfully!</h1><h3><a href='#' onclick='window.close();return false;'>Click here to close this tab.</a></h3>";
    // } else {
    //     echo "<h1>Message could not be sent.</h1><h3><a href='#' onclick='window.close();return false;'>Click here to try again.</a></h3>";
    // }
?>

