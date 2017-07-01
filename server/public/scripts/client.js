console.log('JS Sourced')
var values = {};

$(document).ready(function(){

  $('#addition').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'addition';
    console.log('addition is clicked');
    if (values.type == 'addition'){
      additionRequest();
    }
  });

  $('#subtraction').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'subtraction';
    console.log('subtraction is clicked');
    if (values.type == 'subtraction'){
      subtractionRequest();
    }

  });

  $('#multiplication').on('click', function(){
    console.log('button multiply clicked');
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'multiplication';
    console.log('multiplication is clicked');
    if (values.type == 'multiplication'){
      multiplicationRequest();
    }

  });

  $('#divide').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'division';
    console.log('division is clicked');
    if (values.type == 'division'){
      divisionRequest();
    }
  });
//Massive if statement of function doesnt work when it should...
// if (values.type == 'addition'){
//   additionRequest();
// }
//  else if (values.type == 'subtraction'){
//   subtractionRequest();
// } else if (values.type == 'multiplication'){
//   multiplicationRequest();
// }
// else if (values.type == 'division'){
//   divisionRequest();
// }
  $('#clear').on('click', function(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#showMeTheAnswer').text('');
  });

  function additionRequest(){
    $.ajax({
      url: '/addition',
      type: 'POST',
      data: values,
      success: function(response){
        sendToDom(response);
      }
    });
  }

  function subtractionRequest(){
    $.ajax({
      url: '/subtraction',
      type: 'POST',
      data: values,
      success: function(response){
        sendToDom(response);
      }
    });
  }

  function multiplicationRequest(){
    $.ajax({
      url: '/multiplication',
      type: 'POST',
      data: values,
      success: function(response){
        sendToDom(response);
      }
    });
  }

  function divisionRequest(){
    $.ajax({
      url: '/division',
      type: 'POST',
      data: values,
      success: function(response){
        sendToDom(response);
      }
    });
  }

});//ends doc ready

function sendToDom(answer){
  $('#showMeTheAnswer').text(answer);
}
