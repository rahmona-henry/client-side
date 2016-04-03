var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body)
  console.log(goodData[0].id)
  document.body.innerHTML = example({ id: "Monkey" });
})

