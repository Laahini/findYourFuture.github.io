
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
  var mtbitype="";
  if (energy < 30)
  {
    mtbitype += "I";
  }
  else
  {
    mtbitype += "E";
  }

  if (info <30)
  {
    mtbitype +="S";
  }
  else
  {
    mtbitype += "N";
  }

  if (decision <30)
  {
    mtbitype +="T";
  }
  else
  {
    mtbitype += "F";
  }

  if (organize <30)
  {
    mtbitype+="J";
  }
  else
  {
    mtbitype += "P";
  }
  document.getElementById("myMtbi").innerHTML = mtbitype;
}
