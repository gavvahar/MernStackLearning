function addUser()
{
  var person = new Object();
  var fname = document.getElementById("fname")
  , lname = document.getElementById("lname")
  , email = document.getElementById("email")
  , phone = document.getElementById("phone");

  person.fname = fname;
  person.lname = lname;
  person.email = email;
  person.phone = phone;
  var jasonPerson = JSON.stringify(person);
}
function displayUsers()
{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/users', true);
  xhr.responseType = 'json';
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