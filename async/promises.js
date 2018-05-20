/**
 * Promise is one way JS provided to work with async code
 * It has some advantages over callback: try to call callback functions twice :)
 */

let fetchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved');
        // reject('Rejected');
    }, 2000);
 });

fetchDataPromise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});

// wrapping promise inside a function give you away to pass in arguments
let fetchCountryDataPromise = (countryCode) => {
    return new Promise((resolve, reject) => {
        let request_2 = new XMLHttpRequest();
        let request_2_resData = [];
        let country = {};
        request_2.addEventListener('readystatechange', (event) => {
            if (event.target.readyState === 4 && event.target.status === 200) {
                request_2_resData = JSON.parse(event.target.responseText);
                country = request_2_resData.find((data) => {
                    return data.alpha2Code === countryCode;
                });
                resolve(country);
            }else if (event.target.readySate === 4) {
                reject('Something went wrong.');
            }
        });
        request_2.open('GET', 'http://restcountries.eu/rest/v2/all');
        request_2.send();
    });
};

let fetchCountryData = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
        let responseData = [];
        let match = {};
        if(response.status === 200){
            return response.json();
        }else{
            throw new Error('Cannot fetch country');
        }
    }).then((countries) => {
        match = countries.find((country) => {
            return country.alpha2Code === countryCode;
        });
        if (match === undefined) {
            throw new Error('cannot find country');
        }else {
            return match;
        }
    });
};

// this function is very awesome :)
let minhIsAwesome = (word) => {
    return new Promise((resolve, reject) => {
        if (typeof word === 'string') {
            resolve( word);
        }else{
            reject('Can only input words');
        }
    });
};
// promises chaining - code looks better
minhIsAwesome('minh ').then((data) => {
    return minhIsAwesome(data + 'is ');
}).then((data) => {
    return minhIsAwesome(data + 'awesome.');
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// testing out fetch()
fetch('http://puzzle.mead.io/puzzle/?wordCount=3', {}).then((response) => {
    if (response.status === 200) {
        return response.json();
    }else{
        throw new Error('Cannot fetch man.');
    }
}).then((data) => {
    console.log(data.puzzle);
}).catch((error) => {
    console.log(error);
});

// get location by call the fetch to geoAPI
let geoAPI = 'http://ipinfo.io/json?token=63081a77e06f78';
let getLocation = () => {
    return fetch(geoAPI, {}).then((response) => {
        if (response.status === 200) {
            return response.json();
        }else {
            throw new Error('Cannot get location');
        }
    }).then((data) => {
        return `Hello, you are in ${data.city}, ${data.country}`;
    });
};

// get puzzle from puzzle.mead.io/puzzle
let wordCount = 3;
let puzzleAPI = `http://puzzle.mead.io/puzzle/?${wordCount}`;
let getPuzzle = () => {
    return fetch(puzzleAPI, {}).then((response) => {
        if (response.status === 200) {
            return response.json();
        }else {
            throw new Error('Cannot get puzzle');
        }
    }).then((data) => {
        return data;
    });
};
