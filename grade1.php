<?php

    $answer2 = $_POST['question-2-answers'];
    if ($answer2 == "A") { $totalCorrect++; }

    session_start();
    $_SESSION['superhero'] = $totalCorrect + $_SESSION['superhero'];

?>

<script>
  window.location = "index3.html";
</script>
