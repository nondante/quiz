<?php

    $answer3 = $_POST['question-3-answers'];
    if ($answer3 == "C") { $totalCorrect++; }

    session_start();
    $_SESSION['superhero'] = $totalCorrect + $_SESSION['superhero'];

?>

<script>
  window.location = "final.php";
</script>
