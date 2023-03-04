<?php
defined('BASEPATH') or exit('No direct script access allowed');
$this->load->helper("url");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="<?php echo base_url(); ?>style.css">
</head>

<body>

    <form action="<?php echo base_url(); ?>Login/goHome" method="post">
        <button>Go Home</button>
    </form>
</body>

</html>