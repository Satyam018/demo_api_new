// var express = require("express");
// var app = express();

// app.get('/',(req,res)=>{
//     res.json({
//         "status":true,
//         "message":"deliver",
//             "res":{
//                 "id":6513,
//                 "uid":"edf91cdd-cae7-43b1-bb3d-e708106eb326",
//                 "name":"OMG Bakery",
//                 "type":"Senegalese",
//                 "description":"To provide an exceptional dining experience that satisfies our guests’ grown-up tastes by being a Cut-Above in everything we do.",
//                 "review":"My only critique would be that the rice could of used more vingaer and for them to use real wasabi. Also the variety of fish in stock wasnt a lot but hopefully that can change over time. The cost justify the quality youre getting. A solid 4 stars.",
//                 "logo":"https://loremflickr.com/500/500/restaurant",
//                 "phone_number":"508-204-6243 x265",
//                 "address":"Apt. 159 466 Schuster Pass, South Hobert, UT 13989"
//             }
//     });
// })
// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(80);