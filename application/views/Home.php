<?php
defined('BASEPATH') or exit('No direct script access allowed');
// $this->load->helper("url");
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
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/PopUp.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/detailsTask.css">

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

</script>

<body>
    <div id="root">
        <!-- //// -->
        <div id="header">
            <div id="logo"><img src="<?php echo base_url(); ?>assets/img/logo/logo1.png" alt="logo"></div>
            <div class="search-bar">
                <input type="text" placeholder="Rechercher une tache">
                <div class="icon-search"><i class="fas fa-search"></i></div>
            </div>
            <div id="params">
                <div id="parameter-box">
                    <div class="icon-parameter" id="btn-notification"> <i class="fas fa-bell"></i> </div>
                    <div class="icon-parameter" id="btn-setting"> <i class="fas fa-cog"></i> </div>
                </div>
                <div id="users-box">
                    <div class="avatar-box"> <img src="<?php echo base_url(); ?>assets/img/face2.jpg" alt="avatar">
                    </div>
                    <div class="user-name">Peter Parker Spiderman </div>
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

            </div>
        </div>
        <div id="btn-add-something">
            <div class="plus"></div>
        </div>
    </div>


</body>
<script>
    var base_url = "<?php echo base_url(); ?>";
    var categoriesData = undefined;
</script>
<script src="<?php echo base_url(); ?>assets/js/utilities.js"></script>
<script src="<?php echo base_url(); ?>assets/js/PopUp.js"></script>
<script src="<?php echo base_url(); ?>assets/js/paper.js"></script>
<script src="<?php echo base_url(); ?>assets/js/hider.js"></script>
<script src="<?php echo base_url(); ?>assets/js/UploadFile.js"></script>
<script src="<?php echo base_url(); ?>assets/js/structure.js"></script>
<script src="<?php echo base_url(); ?>assets/js/search.js"></script>
<script src="<?php echo base_url(); ?>assets/js/paperTask.js"></script>
<script src="<?php echo base_url(); ?>assets/js/task.js"></script>
<script src="<?php echo base_url(); ?>assets/js/sideNavbar.js"></script>
<script src="<?php echo base_url(); ?>assets/js/detailsTask.js"></script>

</html>