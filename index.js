var xhr = require('xhr')
var example = require('./views/example.hbs')


xhr.get('https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body)
  console.log(goodData)
  document.body.innerHTML = example({ altitude: goodData[0].altitude });
  document.body.innerHTML = example({ id: goodData[1].id });
  document.body.innerHTML = example({ name: goodData[0].name });
})



