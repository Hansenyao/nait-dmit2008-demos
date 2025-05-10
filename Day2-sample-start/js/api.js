const BaseURL = "http://localhost:3001";
function getQuestions() {
    return fetch(`${BaseURL}/questions`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status == 400) {
                throw new Error('URL is not correct!');
            } else if (response.status == 404) {
                throw new Error('Not found!');
            } else {
                throw new Error('Network response was not ok. Stauts: ' + response.status);
            }
    })
}
//getQuestions().then(data => {
//    console.log(data);
//})

// Asynchronous api
function getQuestions2(callback) {
    fetch(`${BaseURL}/questions`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status == 400) {
                throw new Error('URL is not correct!');
            } else if (response.status == 404) {
                throw new Error('Not found!');
            } else {
                throw new Error('Network response was not ok. Stauts: ' + response.status);
            }
    })
    .then(data => {
        callback(data);
    })
}

//getQuestions2((data) => {
//    console.log(data);
//})

export { getQuestions, getQuestions2 };