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
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/paper.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/task.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/hider.css">

</head>
<style>
    @font-face {
        font-family: Poppins;
        src: url(<?php echo base_url(); ?>assets/font/Poppins/Poppins-Light.ttf);
    }

    @font-face {
        font-family: Dancing;
        src: url(<?php echo base_url(); ?>assets/font/Dancing/DancingScript-Regular.ttf);
    }
</style>

<body>
    <div id="root">
        <!-- //// -->
        <div id="header">
            <div id="logo"><img src="<?php echo base_url(); ?>assets/img/logo/logo.png" alt="logo"></div>
            <div class="search-bar">
                <input type="text" placeholder="Rechercher une tache">
                <div class="icon-search"><i class="fas fa-search"></i></div>
            </div>
            <div id="params">
                <div id="parameter-box">
                    <div class="icon-parameter"> <i class="fas fa-bell"></i> </div>
                    <div class="icon-parameter"> <i class="fas fa-cog"></i> </div>
                </div>
                <div id="users-box">
                    <div class="avatar-box"> <img src="<?php echo base_url(); ?>assets/img/logo/logo.png" alt="avatar">
                    </div>
                    <div class="user-name">Peter Parker Samy </div>
                </div>
            </div>
            <div id="bars-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
        <!-- /// -->
        <div id="rows-tickets"></div>
        <!-- -->
        <div id="structure">
            <div id="main-container">
                <div class="head-section">
                    <div class="title-section">Mes taches</div>
                    <div class="support-section">
                        <div class="name-support">Filtrer</div>
                        <div class="icon-support icon-parameter"> <i class="fas fa-filter"></i> </div>
                    </div>
                </div>
                <div id="data-container">

                </div>
            </div>

        </div>
        <div id="btn-add-something">
            <div class="plus"></div>
        </div>
    </div>

</body>
<script src=" <?php echo base_url(); ?>assets/js/paper.js"></script>
<script src="<?php echo base_url(); ?>assets/js/hider.js"></script>
<script src="<?php echo base_url(); ?>assets/js/structure.js"></script>
<script src="<?php echo base_url(); ?>assets/js/search.js"></script>
<script src="<?php echo base_url(); ?>assets/js/paperTask.js"></script>
<script src="<?php echo base_url(); ?>assets/js/task.js"></script>
<script src="<?php echo base_url(); ?>assets/js/sideNavbar.js"></script>

</html>