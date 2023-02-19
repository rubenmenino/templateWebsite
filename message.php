<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "mtpog092@gmail.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "A tua mensagem foi enviada.";
      }else{
         echo "Desculpe, a tua mensagem não foi enviada!";
      }
    }else{
      echo "Introduza um email válido!";
    }
  }else{
    echo "Email e mensagem é obrigatório!";
  }
?>