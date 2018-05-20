// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', (event) => {
//     if (event.target.readyState === 4 && event.target.status === 200) {
//         let resData = JSON.parse(event.target.responseText);
//         console.log(resData);
//     }else if (event.target.readySate === 4) {
//         console.log('Somthing went wrong. Status:', event.target.status);
//     }
// });
// request.open('GET', 'http://puzzle.mead.io/puzzle/?wordCount=3');
// request.send();

getCountryData('VN', (error, result) => {
    if (error) {
        console.log(error);
    }else {
        console.log(result);
    }
});

fetchCountryDataPromise('VN').then((country) => {
    console.log(country);
}, (error) => {
    console.log(error);
});

fetchCountryData('USsss').then((country) => {
    console.log(country);
}).catch((error) => {
    console.log(error);
});

getLocation().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
