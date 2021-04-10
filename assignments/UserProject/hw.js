/*var fname1 = document.getElementById("fname");
function displayValues()
{
  sessionStorage.setItem("name",fname1);
  document.getElementById("demo").innerHTML= fname1;//sessionStorage.getItem("name");
}*/

let xhr = new document.body();
xhr.responseType = 'html'
function displayValues()
{
  xhr.onload = () => {
    let status = xhr.status;
    if (status == 200) {
      console.log(xhr.response);
      console.log(xhr.responseType);
      var obj = xhr.response, x, txt = "";
      txt += "<table border='1'>"
      txt += "<tr>"
      txt += "<th> First Name </th>"
      txt += "<th> Last Name </th>"
      txt += "<th> Email Address </th>"
      txt += "<th> Phone </th>"
      txt += "</tr>"
      for(x in obj)
      {
        txt += "<tr>"
        txt += "<td>" + obj[x].fname + "</td>"
        txt += "<td>" + obj[x].lname + "</td>"
        txt += "<td>" + obj[x].email + "<br>"
        txt += "<td>" + obj[x].phone + "</td>"
        txt += "</tr>"
      }
     txt += "</table>"
     document.getElementById("demo").innerHTML = txt;
     } else
     {
      console.log(status);
     }
  };
  xhr.send();
}