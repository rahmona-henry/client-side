var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body)
  console.log(goodData[0].id)
  document.body.innerHTML = example({ name: "Monkey" });
})

