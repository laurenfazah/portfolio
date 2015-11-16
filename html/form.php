<?php
    require '../vendor/autoload.php';
    use Mailgun\Mailgun;
    session_start();
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message =  $_POST['message'];
        # Instantiate the client.
        $mgClient = new Mailgun('key-3e522d2966a5fbb738696e453ccde349');
        $domain = "mail.laurenfazah.com";
        # Make the call to the client.
        $result = $mgClient->sendMessage($domain, array(
            'from'    => $name . ' <' . $email . '>',
            'to'      => 'Lauren <laurenfazah@gmail.com>',
            'subject' => 'Portfolio Message',
            'text'    => $message
        ));
    }
    header( 'Location: portfolio.dev:8080/#contact' ) ;
    session_destroy();
?>
