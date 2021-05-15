let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://time.jsontest.com', true);
xhr.responseType = 'json';

xhr.onload = () => {

    let status = xhr.status;

    if (status == 200) {
        console.log(xhr.response);
    } else {
        console.log(status);
    }
};

xhr.send();

// fetch('http://time.jsontest.com')
// .then(res => res.json())
// .then(response => console.log(response));