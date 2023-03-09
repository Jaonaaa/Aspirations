<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Calendar</title>
      <!-- Style CSS -->
      <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/callendar.css">
      <link rel="stylesheet" href="<?php echo base_url(); ?>assets/font/fontawesome-5/css/all.min.css">
   </head>
   <body>
      
      <main>
         <!-- Project Code Start -->

         <!-- <div class="wrapper"> -->
      <div class="container-calendar">
         <div class="button-container-calendar">
            <button id="previous" onclick="previous()"><</button>
            <h3 id="monthAndYear"></h3>
            <button id="next" onclick="next()">></button>
         </div>
         <table class="table-calendar" id="calendar" data-lang="en" onclick="getValue()">
            <thead id="thead-month"></thead>
            <tbody id="calendar-body" ></tbody>
         </table>
         <div class="footer-container-calendar">
            <label for="month">Jump To: </label>
               <select id="month" onchange="jump()">
                 <option value=0>Jan</option>
                 <option value=1>Feb</option>
                 <option value=2>Mar</option>
                 <option value=3>Apr</option>
                 <option value=4>May</option>
                 <option value=5>Jun</option>
                 <option value=6>Jul</option>
                 <option value=7>Aug</option>
                 <option value=8>Sep</option>
                 <option value=9>Oct</option>
                 <option value=10>Nov</option>
                 <option value=11>Dec</option>
               </select>
            <select id="year" onchange="jump()"></select>
            <img src="<?php echo base_url(); ?>assets/img/pen.svg" alt="" height="24px" width="24px">
        </div>
    </div>
<!-- </div> -->
         
         <script type="text/javascript" src="<?php echo base_url(); ?>assets/js/callendar.js"></script>
         <!-- Project Code End -->
      </main>
  
   </body>
</html>