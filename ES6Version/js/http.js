export class Http {
    //Helper function to fetch data from the passed url
    static fetchData(url) {
        //Promise
        return new Promise((resolve, reject) => {
        //Create a new AJAX Http request
            const HTTP = new XMLHttpRequest();

        //Open the Ajax request, specify the request type (GET) & URL to fetch from
            HTTP.open('GET', url);

        //Listen to any changes (REQUEST NOT YET SENT!!).
            //Define the ready state
            HTTP.onreadystatechange = function () {
                //If request is done & the status code is 200 (everything ok)
                if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
                    //Extract the response data by parsing JSON object & storing response text
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);    //(API Requires JSON).
                    resolve(RESPONSE_DATA);                                 //Success Case. Return data.
                }
                //If finished and not ok (HTTP.responseText != 200)
                else if (HTTP.readyState == XMLHttpRequest.DONE){
                    console.log('request failed');      //Log error
                    reject('Something went wrong');     //Fail Case. Return error message
                }
            };
            HTTP.send();
        });
    }
}