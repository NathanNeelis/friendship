let requestURL = 'http://localhost:1900/search/allusers';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const allUsers = request.response;
    log(allUsers);
};


const log = (jsonObj) => {
    console.log(jsonObj);
};