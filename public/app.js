var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if (this.status !== 200)
  return;
  var jsonString = this.responseText;
  beers = JSON.parse(jsonString);
  populateList(beers);
}

var populateList = function(beers) {
  var ul = document.querySelector('#beer-list');
  beers.forEach(function(beer) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    li.innerText = beer.name;
    img.innerHTML = `<img src=${beer.image_url}>`;
    ul.appendChild(li);
  })
}




var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
}

document.addEventListener('DOMContentLoaded', app);
