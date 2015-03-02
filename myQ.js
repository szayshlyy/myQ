$(document).ready(function() {
var numberInQ = 0;
var questionQueue = [];
var answerQueue = [];

  $('#submitOne').click(function() {
    var inputOne = $('#question').val();
    questionQueue.push(inputOne);
    console.log(inputOne);
    numberInQ += 1,
    console.log(numberInQ);
    console.log(questionQueue);
    $('input[type=text]').val("");
    $('#displayQuestion').append("<li>" + inputOne +"</li>");
  });

  $('#getQuestion').click(function() {
    var item = questionQueue.shift();
    $('#showQuestion').append("<p>" + item +"</p>");
  });

  $('#submitAnswer').click(function() {
    var answerOne = $('#userAnswer').val();
    answerQueue.push(answerOne);
    console.log(answerOne);
    console.log(answerQueue);
    $('input[type=text]').val("");
    $('#showQuestion').empty();
    $('#displayAsnwer').append("<li>" + answerOne +"</li>");
  });

});
