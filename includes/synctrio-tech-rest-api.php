<?php
add_action('rest_api_init', function () {
    register_rest_route('synctrio/v1', '/contact', [
        'methods'  => 'POST',
        'callback' => 'synctrio_send_contact_email',
        'permission_callback' => '__return_true',
    ]);
});


function synctrio_send_contact_email($request)
{
    $params = $request->get_json_params();

    $name     = sanitize_text_field($params['name']);
    $email    = sanitize_email($params['email']);
    $message  = sanitize_textarea_field($params['message']);
    $budget   = sanitize_text_field($params['budget']);
    $project  = sanitize_text_field($params['project']);

    $to      = 'shyam.kumarc3@gmail.com'; // Change this to your desired receiver
    $subject = 'New Contact Form Submission';
    $headers = ['Content-Type: text/html; charset=UTF-8', "Reply-To: $name <$email>"];

    $body = "
    <h2>New Lead from SyncTrioTech</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Project Type:</strong> {$project}</p>
    <p><strong>Budget:</strong> {$budget}</p>
    <p><strong>Message:</strong><br />{$message}</p>
  ";

    $mail_sent = wp_mail($to, $subject, $body, $headers);

    if ($mail_sent) {
        return new WP_REST_Response(['success' => true, 'message' => 'Email sent successfully!'], 200);
    } else {
        return new WP_REST_Response(['success' => false, 'message' => 'Failed to send email.'], 500);
    }
}
