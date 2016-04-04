var xhr = require('xhr')
var example = require('./views/example.hbs')
var example2 = require('./views/example2.hbs')
var example3 = require('./views/example3.hbs')


var buttonName = document.getElementById('name');
var buttonLatitude = document.getElementById('latitude');
var buttonId = document.getElementById('id');

buttonName.addEventListener('click', function(){
 xhr.get('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body)
  console.log(goodData)
  document.body.innerHTML = example3({ name: goodData[0].name });
  })

})

buttonId.addEventListener('click', function(){
 xhr.get('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body)
  console.log(goodData)
  document.body.innerHTML = example2({ id: goodData[0].id });
  })

})

buttonLatitude.addEventListener('click', function(){
 xhr.get('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body)
  console.log(goodData)
  document.body.innerHTML = example({ latitude: goodData[0].latitude});
  })

})




