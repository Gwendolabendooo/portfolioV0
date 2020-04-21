<?php
    // $to = 'gwendalkameleoon@gmail.com';
    // $subject = html_entity_decode($_POST["user_name"], ENT_QUOTES, "UTF-8");
    // $courriel = html_entity_decode($_POST["user_email"], ENT_QUOTES, "UTF-8");
    // $message = html_entity_decode($_POST["user_message"], ENT_QUOTES, "UTF-8");

    // $headers = 'From: test@gwendallefloch.me';
    
    // mail($to, $subject, $message, $headers);
    
    // print $subject;
    // print $courriel;
    // print $message;
    // print $headers;
$nom = html_entity_decode($_POST["nom"], ENT_QUOTES, "UTF-8");
$mail = html_entity_decode($_POST["email"],ENT_QUOTES, "UTF-8");
$commentaire = html_entity_decode($_POST["message"],ENT_QUOTES, "UTF-8");

echo($nom);
echo($mail);
echo($commentaire);

if(!empty($nom)) {
    $To = 'gwendalkameleoon@gmail.com'.$mail;

    $Sujet = utf8_decode('Votre reservation '.$nom);
    $message .= utf8_decode('Votre commentaire : '.$commentaire);
    
    $Header = "From:".$nom."<".$mail.">"."\n";
    
    if(mail($To, $Sujet, $message, $Header)){
        echo 'Envoie du message';
        unset($nom);
        unset($email);
        unset($message);
    }
    else{
        echo 'Une erreur est survenue';
    }
}
    
?>