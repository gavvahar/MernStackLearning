let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
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