function getData (cb){
    var xhr = new XMLHttpRequest ();
    xhr.open("GET", "https://swapi.co/api/people/1/");
    xhr.send ();
    xhr. onreadystatechange = function () {
        if (this.readyState == 4 && this.status ==200) {
            cb(JSON.parse(this.responseText));
        }
    };

}

getData (function(data) {
    console.log(data);
});


// var data;
// xhr. onreadystatechange = function () {
//     console.log(this.readyState);
//     if (this.readyState == 4 && this.status ==200) {
//         // document.getElementById("data").innerHTML = this.responseText;
//     setData (JSON.parse(this.responseText));
//     }
// };

// xhr.open("GET", "https://swapi.co/api/people/1/");
// xhr.send ();

// function setData (jsonData) {
//     data = jsonData;
// }

// setTimeout (function() {
// console.log(data);
// }, 500);


// *************************
// eigen prutsel
// var vet = new XMLHttpRequest ();

// vet.open("GET", "https://ckan.dataplatform.nl/dataset/f4eabcce-9051-49f5-bf81-d285e601e697/resource/bef54ab7-2bb9-4bcf-afb4-2aa2f5c29cec/download/hondenuitlaatkaart.geojson");
// vet.send ();

// vet. onreadystatechange = function () {
//     if (this.readyState == 4 && this.status ==200) {
//         document.getElementById("hondenpoep").innerHTML = this.responseText;
//     }
// };

