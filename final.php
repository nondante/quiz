<!doctype html>

<html id="html" lang="en">
<head>
  <meta charset="utf-8">
  <title>Rezultāts</title>
  <link rel="stylesheet" href="styles.css?v=1.0">
</head>
<body>
<div class="container">
  <h1 id="thankyou"></h1>
  <h3 id="finalResult"></h3>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="scripts.js"></script>
<script>
  var thankyou = document.getElementById("thankyou");
  var finalResult = document.getElementById("finalResult");
  thankyou.innerHTML = "Paldies, " + localStorage.getItem("storageName") + "!";
  finalResult.innerHTML = "Tu atbildēji pareizi uz <?php session_start(); echo $_SESSION['superhero'];?> no 3 jautājumiem.";
</script>
</body>
</html>
