var fname1 = document.getElementById("fname");
function displayValues()
{
  sessionStorage.setItem("name",fname1);
  document.getElementById("demo").innerHTML= sessionStorage.getItem("name");
}