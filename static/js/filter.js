let requestURL = 'http://localhost:1900/search/allusers';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const allUsers = request.response;
    setHeader();
    showUsers(allUsers);
};


function setHeader() {
    let myH2 = document.getElementById('myH2');
    myH2.textContent = 'These people might be interesting to you!';

}

function showUsers(jsonObj) {
    const users = jsonObj;
    console.log(users);

    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        // const myArticle = document.createElement('article');
        const myH4 = document.getElementById('myH4');
        const myPara1 = document.getElementById('myPara1');

        myH4.textContent = users[i].firstname;
        myPara1.textContent = users[i].location;

    }
}


// Resources
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild