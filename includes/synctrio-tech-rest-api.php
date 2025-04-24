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
  $project  = sanitize_text_field($params['projectType']);

  $to      = 'shyam.kumarc3@gmail.com'; // Change this to your desired receiver
  $subject = 'New Contact Form Submission';
  $headers = ['Content-Type: text/html; charset=UTF-8', "Reply-To: $name <$email>"];

  $logo_url = 'https://synctrio.com/wp-content/uploads/2024/04/synctriotech-logo.png'; // Replace with your actual logo URL
  $website_url = 'https://synctrio.com';

  $body = "
  <div style='font-family: Arial, sans-serif; background-color: #f7f9fb; padding: 20px; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);'>

      <div style='text-align: center; margin-bottom: 20px;'>
        <img src='{$logo_url}' alt='SyncTrio Tech Logo' style='max-width: 180px; height: auto;' />
      </div>

      <h2 style='color: #0c7c59; border-bottom: 2px solid #40ffba; padding-bottom: 10px;'>📩 New Lead from SyncTrio Tech</h2>

      <p><strong style='color:#00bfa5;'>Name:</strong> {$name}</p>
      <p><strong style='color:#00bfa5;'>Email:</strong> {$email}</p>
      <p><strong style='color:#00bfa5;'>Project Type:</strong> {$project}</p>
      <p><strong style='color:#00bfa5;'>Budget:</strong> {$budget}</p>
      <p><strong style='color:#00bfa5;'>Message:</strong><br />" . nl2br($message) . "</p>

      <div style='margin: 30px 0; text-align: center;'>
        <a href='{$website_url}' style='display: inline-block; padding: 12px 24px; background-color: #0c7c59; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;'>
          View More on SyncTrioTech.com
        </a>
      </div>

      <hr style='margin: 30px 0; border: none; border-top: 1px solid #eee;' />

      <div style='text-align: center;'>
        <p style='margin-bottom: 10px;'>Stay Connected</p>
        <a href='https://wa.me/9779849121600' style='margin: 0 5px; text-decoration: none;'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='WhatsApp' width='24' height='24' />
        </a>
        <a href='https://www.linkedin.com/company/synctriotech' style='margin: 0 5px; text-decoration: none;'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='LinkedIn' width='24' height='24' />
        </a>
        <a href='https://www.facebook.com/synctriotech' style='margin: 0 5px; text-decoration: none;'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='Facebook' width='24' height='24' />
        </a>
      </div>

      <p style='font-size: 12px; color: #666; text-align: center; margin-top: 20px;'>
        This message was sent via the contact form on <strong>SyncTrioTech.com</strong><br/>
        <em>Your ideas, we build. Let's grow together 🚀</em>
      </p>
    </div>
  </div>
";



  $mail_sent = wp_mail($to, $subject, $body, $headers);

  if ($mail_sent) {
    // Send Thank You Email to Sender
    $user_subject = 'Got your message! Let’s build something great together';
    $user_headers = ['Content-Type: text/html; charset=UTF-8'];

    $user_body = "
      <div style='font-family: Arial, sans-serif; background-color: #f7f9fb; padding: 20px; color: #333;'>
        <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);'>
        
          <div style='text-align: center; margin-bottom: 20px;'>
            <img src='{$logo_url}' alt='SyncTrio Tech Logo' style='max-width: 180px; height: auto;' />
          </div>

          <h2 style='color: #0c7c59;'>Hey {$name}!</h2>

          <p>Thanks for reaching out to us at SyncTrio Tech! 🙌</p>
          <p>We’ve received your message and our team is already checking things out. We’ll get back to you soon with more details.</p>
          <p>Meanwhile, feel free to explore more about us or hit us up on social.</p>
          
          <p><strong>Your Submission Summary:</strong></p>
          <ul style='line-height: 1.7;'>
            <li><strong>Project Type:</strong> {$project}</li>
            <li><strong>Budget:</strong> {$budget}</li>
            <li><strong>Message:</strong> " . nl2br($message) . "</li>
          </ul>
<p>Cheers,</p>
<p>The SyncTrio Tech Team 🚀</p>
          <div style='margin: 30px 0; text-align: center;'>
            <a href='{$website_url}' style='display: inline-block; padding: 12px 24px; background-color: #0c7c59; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;'>
              Explore More at SyncTrioTech.com
            </a>
          </div>

          <div style='text-align: center;'>
            <p style='margin-bottom: 10px;'>Follow us for tech tips & updates:</p>
            <a href='https://wa.me/9779849121600' style='margin: 0 5px; text-decoration: none;'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='WhatsApp' width='24' height='24' />
            </a>
            <a href='https://www.linkedin.com/company/synctriotech' style='margin: 0 5px; text-decoration: none;'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='LinkedIn' width='24' height='24' />
            </a>
            <a href='https://www.facebook.com/synctriotech' style='margin: 0 5px; text-decoration: none;'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='Facebook' width='24' height='24' />
            </a>
          </div>

          <p style='font-size: 12px; color: #666; text-align: center; margin-top: 20px;'>
            This is an automated confirmation email from <strong>SyncTrioTech</strong><br/>
            <em>Your ideas, we build. Let's grow together ✨</em>
          </p>
        </div>
      </div>
    ";

    wp_mail($email, $user_subject, $user_body, $user_headers); // Send thank-you to user

    return new WP_REST_Response(['success' => true, 'message' => 'Email sent successfully!'], 200);
  } else {
    return new WP_REST_Response(['success' => false, 'message' => 'Failed to send email.'], 500);
  }
}
