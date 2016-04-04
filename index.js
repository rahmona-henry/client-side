var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('./cats.json', function(err, data) {
  if (err) console.log(err) // do something

  var goodData = JSON.parse(data.body[0])
  console.log(goodData.id)
  document.body.innerHTML = example({ latitude: goodData[0].name });
})

