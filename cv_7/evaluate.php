<!DOCTYPE html>
<html>
<head>
<title>JQuery introduction</title>
<link rel="stylesheet" href="./css/style.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="./js/jquery-3.6.0.js"> </script> 

</head>
<body>
   <header>
      <h1 id="Nadpis_headline_on_php_page">Exercise nr. 7 - example of server side PHP script receiving submitted data</h1> <!-- Príklad vloženia nadpisu prvej úrovne + DOM manipulácia textu-->
  </header>
<div class="container">
     
      <div class="articles">

        <img class="center convert_to_block" src="http://localhost/javascript_cvicenia/cv_5/images/banner.png" alt="Banner with name Quadratic equation solver and calculus formulas." width="450">
        <br />
        <h2>Form validation with client scripting technology</h2>
        <p id="about_jquery">client scripting technology as JavaScript (optionally supported by jQuery library) can be used for first validation of values 
           inserted into a submiting form.  This is a way how to lower a load of server by reducing number of form resubmiting after incorect data 
           post. </p>
        
        <div class="events_width_container ">
           <form action="evaluate.php" method="post">
              <div class="fieldset" >
                  <legend>You provided these data:</legend>
                  <?php
                     $nick = htmlspecialchars($_POST['nick']);
                     $age = htmlspecialchars($_POST['age']);
                     $e_mail = htmlspecialchars($_POST['e-mail']);
                                      
                     echo "<h2>" . $nick . "</h2>"; 
                     echo "<h2>" . $age . "</h2>";  
                     echo "<h2>" . $e_mail . "</h2>";    

                  ?>
                  <br />
                  <a href="index.htm">Return to main form page --></a>
                 
               </div>
           </form>
         </div>
        
        
        


        
        
                
      </div>  
</div>

<div class="footer">
    <img class="footer_image" src="http://localhost/javascript_cvicenia/cv_5/images/logos.png" alt="Bottom images for HTML+CSS+Javascript">
</div>
<script src="./js/script.js"> </script> 
</body>
</html>

