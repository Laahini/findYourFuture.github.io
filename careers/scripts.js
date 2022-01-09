
var energy =0;
var info =0;
var decision =0;
var organize =0;


function addPoints(e, i, d, o)
{
  energy = e+energy;
  info = i + info;
  decision = d+decision;
  organize = o+organize;
}

function finishQuiz()
{
  var type = document.getElementById("myMtbi");
  var explanation = document.getElementById("explanation");

  if (energy < 30)
  {
    type.innerHTML += "I";
  }
  else
  {
    type.innerHTML += "E";
  }

  if (info <30)
  {
    type.innerHTML +="S"
  }
  else
  {
    type.innerHTML += "N"
  }

  if (decision <30)
  {
    type.innerHTML +="T"
  }
  else
  {
    type.innerHTML += "F"
  }

  if (organize <30)
  {
    type.innerHTML +="J"
  }
  else
  {
    type.innerHTML += "P"
  }
}
