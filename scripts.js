//Parallax scroll - Home
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})

//countdown
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//filtering Schedule
var day0 = document.getElementsByCkassName("day0");
var day1 = document.getElementsByCkassName("day1");
var day2 = document.getElementsByCkassName("day2");
var keynote = document.getElementsByCkassName("keynote");
var workshop = document.getElementsByCkassName("workshop");
var cluster = document.getElementsByCkassName("cluster");

function filterEvents(className)
{
  if(className=day0)
  {
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "none";
  }
  else if (className=day1)
  {
    document.getElementById("day0").style.display = "none";
    document.getElementById("day2").style.display = "none";
  }
  else if(className=day2)
  {
    document.getElementById("day0").style.display = "none";
    document.getElementById("day1").style.display = "none";
  }
  if(className=keynote)
  {
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "none";
  }
  else if (className=workshop)
  {
    document.getElementById("day0").style.display = "none";
    document.getElementById("day2").style.display = "none";
  }
  else if(className=cluster)
  {
    document.getElementById("day0").style.display = "none";
    document.getElementById("day1").style.display = "none";
  }

}

/*
filterEvents("all")
function filterEvents(c)
{
  var x,i;
  x=document.getElementsByCkassName("event");
  if (c=="all") c=="";
  for(i=0; i<x.length;i++)
  {
    removeClass(x[i]],"show");
    if(x[i].className.indexOf(c) >-1) addClass(x[i],?"show");
  }
}
function addClass(element, name)
{
  var i = arr1, arr2;
  arr1= element.className.split(" ");
  arr2=name.split(" ");
  for (i = 0; i<arr2.length;i++)
  {
    if(arr1.indexOf(arr2[i]==-1)
    {
      element.className += " " + arr2[i];
    }
  }
}
function removeClass(element, name)
{
  var i, arr1, arr2;
  arr1= element.className.split(" ");
  arr2=name.split(" ");
  for (i=0; i<arr2.length; i++)
  {
    while(arr1.indexOf(arr2[i])>-1)
    {
      arr1.splice(arr1.indexOf(arr2[i],1))
    }
  }
  element.className = arr1.join(" ");
}
*/
