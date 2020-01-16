'use strict'

function getUrl(param) {
    let api = ''
    const ENGLISH = 'lang/en'
    const SERBIAN = 'lang/sr'

    if (param == "english") {
        api = `https://programming-quotes-api.herokuapp.com/quotes/random/${ENGLISH}`
    } else if (param == "serbian") {
        api = `https://programming-quotes-api.herokuapp.com/quotes/random/${SERBIAN}`
    } else {
        alert(22);
    }
    console.log(api);
    return api;
}



function getQuote(param) {
    let apiUrl = getUrl(param);

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                display (data, param);
             })
        .catch(function(error){
            console.log(error);
            })


}

function display(data, param){
    if (param == 'english') {
        console.log(data.author);
        console.log(data.en);
        document.getElementById('author').innerText = data.author;
        document.getElementById('quote').innerText = data.en;
    } else if (param == 'serbian') {
        console.log(data.author);
        console.log(data.sr);
        document.getElementById('author').innerText = data.author;
        document.getElementById('quote').innerText = data.sr;
    } else {
        alert(23);
    }
}


function imgApi(){
    const KEY = "4d8816e9adbe519e624f32816e38e38756901ae9973030d68134b06c0775656c";
    let imgUrl =`https://api.unsplash.com/photos/?client_id=${KEY}`;

    return imgUrl;
}

function getImg(){
    const IMG_API = imgApi()
    //console.log(IMG_API);
    fetch (IMG_API)
        .then (function(resp){
        return resp.json();
    })
        .then (function(image){
           // console.log(image[3].urls.small);
            let pic = image[3].urls.small;
            console.log(pic);
            return pic;
        })
}

function buildImg(){
    let picture = getImg();
    console.log(picture);
   //document.getElementById('picture').src = picture;

}

function englishbtn(){
    buildImg();
    getQuote('english');
    
}

function srbbtn(){
    buildImg();
    getQuote('serbian');
    
}



// https://api.unsplash.com/photos/?client_id=4d8816e9adbe519e624f32816e38e38756901ae9973030d68134b06c0775656c



/*tried Eventlisteners
document.getElementById('enbtn').addEventListener('click', function () {
    getQuote('english')
});
document.getElementById('srbtn').addEventListener('click', function () {
    getQuote('serbian')
});
document.getElementById('srbtn').addEventListener('click', buildImg);
document.getElementById('enbtn').addEventListener('click', buildImg);
window.addEventListener('load', buildImg);*/
