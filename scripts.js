
//Variables
var elem = document.getElementById("myBar");
var currentLocation = window.location;
var startTestButton = document.getElementById("startTestButton");
var testDropdown = document.getElementById("testDropdown");
var testName = document.getElementById("testName");
var firstQuestionForm = document.getElementById("firstQuestionForm");
var question1answersA = document.getElementById("question-1-answers-A");
var question1answersB = document.getElementById("question-1-answers-B");
var question1answersC = document.getElementById("question-1-answers-C");
var question1answersD = document.getElementById("question-1-answers-D");
var question2answersA = document.getElementById("question-2-answers-A");
var question2answersB = document.getElementById("question-2-answers-B");
var question2answersC = document.getElementById("question-2-answers-C");
var question2answersD = document.getElementById("question-2-answers-D");
var question3answersA = document.getElementById("question-3-answers-A");
var question3answersB = document.getElementById("question-3-answers-B");
var question3answersC = document.getElementById("question-3-answers-C");
var question3answersD = document.getElementById("question-3-answers-D");


//Updating the progress bar
if(currentLocation == "http://localhost/index1.html"){
  var width = 33.3;
  elem.style.width = width + '%';
} else if(currentLocation == "http://localhost/index2.html"){
  var width = 66.6;
  elem.style.width = width + '%';
} else if(currentLocation == "http://localhost/index3.html"){
  var width = 100;
  elem.style.width = width + '%';
}

function startFormValidation(){
    testDropdownValue = testDropdown.value;
    testNameValue = testName.value;
    if(testDropdownValue!="Latvija" || testNameValue==""){
      alert("Lūdzu ievadiet vārdu un izvēlieties testu.");
    }else {
      window.location = "index1.html";
  }
}

function firstQuestionValidation(){
  if(!question1answersA.checked&&!question1answersB.checked&&!question1answersC.checked&&!question1answersD.checked){
    alert("Lūdzu izvēlieties atbildi!");
    return false;
  }
}

function secondQuestionValidation(){
  if(!question2answersA.checked&&!question2answersB.checked&&!question2answersC.checked&&!question2answersD.checked){
    alert("Lūdzu izvēlieties atbildi!");
    return false;
  }
}

function thirdQuestionValidation(){
  if(!question3answersA.checked&&!question3answersB.checked&&!question3answersC.checked&&!question3answersD.checked){
    alert("Lūdzu izvēlieties atbildi!");
    return false;
  }
}

$(".radioButtons").click(function(){
  if($(this).is(":checked")){
    $(".radioButtons").parent().css("background-color", "#ffcecc");
    $(this).parent().css("background-color", "#ba2644");
  }
});

function updateInputs () {

    testName = testName.value;
    localStorage.setItem("storageName",testName);

}




//Event listeners
startTestButton.addEventListener("click", startFormValidation);
startTestButton.addEventListener("click", updateInputs);
