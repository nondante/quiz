<?php

    $answer1 = $_POST['question-1-answers'];
    if ($answer1 == "B") { $totalCorrect++; }

    session_start();
    $_SESSION['superhero'] = $totalCorrect;

?>

<script>
  window.location = "index2.html";
</script>
