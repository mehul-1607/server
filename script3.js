const express=require('express');
const bodyParser=require('body-parser')
const app=express();


app.use(express.static(__dirname+'/public'))

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json());
// app.get('/:gand',(req,res)=>{
// 	// console.log(req.query);
// 	// req.body
// 	// console.log(req.header);
// 	console.log(req.params);

// 	res.status(404).send("Not founing");
// });



app.listen(3000);