<?php
defined('BASEPATH') or exit('No direct script access allowed');
$this->load->helper("url");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/structure.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/font/fontawesome-5/css/all.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/sideNavbar.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/mainContainer.css">

</head>
<style>
    @font-face {
        font-family: Poppins;
        src: url(<?php echo base_url(); ?>assets/font/Poppins/Poppins-Light.ttf);
    }
</style>

<body>
    <div id="root">
        <!-- //// -->
        <div id="header">
            <div id="logo"><img src="<?php echo base_url(); ?>assets/img/logo/logo.png" alt="logo"></div>
            <div class="search-bar">
                <input type="text" placeholder="Recherche">
                <div class="icon-search"><i class="fas fa-search"></i></div>
            </div>
            <div id="params">
                <div id="parameter-box">
                    <div class="icon-parameter"> <i class="fas fa-bell"></i> </div>
                </div>
                <div id="users-box">
                    <div class="avatar-box"> <img src="<?php echo base_url(); ?>assets/img/logo/logo.png" alt="avatar">
                    </div>
                    <div class="user-name">Peter Parker Samy Stephen</div>
                </div>
            </div>
        </div>
        <!-- /// -->
        <div id="rows-tickets"></div>
        <!-- -->
        <div id="structure">
            <div id="navbar-left" class="full-nav">
                <div class="row-nav">
                    <div class="top-content-row">
                        <div class="icon-nav"> <i class="fas fa-tree"></i> </div>
                        <div class="text-nav">Mes taches</div>
                        <div class="dropdown-icon"><i class="fas fa-caret-down"></i></div>
                    </div>
                    <div class="under-content-row"></div>
                </div>

            </div>
            <div id="main-container"></div>
        </div>
    </div>
</body>

</html>