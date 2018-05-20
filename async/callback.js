let getCountryData = (countryCode, callback) => {
    let request_2 = new XMLHttpRequest();
    let request_2_resData = [];
    let country = {};
    request_2.addEventListener('readystatechange', (event) => {
        if (event.target.readyState === 4 && event.target.status === 200) {
            request_2_resData = JSON.parse(event.target.responseText);
            country = request_2_resData.find((data) => {
                return data.alpha2Code === countryCode;
            });
            callback(undefined, country);
        }else if (event.target.readySate === 4) {
            callback(`Something wrong happened. Status ${event.target.status}`);
        }
    });
    request_2.open('GET', 'http://restcountries.eu/rest/v2/all');
    request_2.send();
};
