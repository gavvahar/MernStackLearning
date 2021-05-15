let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.responseType = 'json';

xhr.onload = () => {

    let status = xhr.status;

    if (status == 200) {
        console.log(xhr.response);
        console.log(xhr.responseType);
        var obj = xhr.response, x, txt = "";
      txt += "<table border='1'>"
      txt += "<tr>" 
          txt += "<th> id </th>"
          txt += "<th> Name </th>" 
          txt += "<th> Address </th>"
          txt += "<th> Geo</th>"
          txt += "<th> phone </th>"
          txt += "<th> website</th>"
          txt += "<th> Company </th>"
          txt += "</tr>"
      for(x in obj)
        {
          txt += "<tr>"
          txt += "<td>" + obj[x].id + "</td>"
          txt += "<td>" + obj[x].name + "</td>"
          txt += "<td>" + obj[x].address.street + "<br>"
          txt += obj[x].address.suite + "<br>"
          txt += obj[x].address.city + " " + obj[x].address.zipcode + "</td>"
          txt += "<td>" + obj[x].address.geo.lat + "<br>"
          txt += obj[x].address.geo.lng + "</td>"
          txt += "<td>" + obj[x].phone + "</td>"
          txt += "<td>" + obj[x].website + "</td>"
          txt += "<td>" + obj[x].company.name + "<br>"
          txt += obj[x].company.catchPhrase + "<br>"
          txt += obj[x].company.bs + "</td>"
          txt += "</tr>"
        }
      txt += "</table>"
      document.getElementById("demo").innerHTML = txt;
    } else {
        console.log(status);
    }
};

xhr.send();