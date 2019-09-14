const express=require('express');

const app=express();

app.use((req,res,next)=>{
	console.log('<h1>HELLLOOO</h1>')
	next();
})

app.get('/', (req,res)=>{
	const user={
		name: 'Sally',
		hobby:'soccer'
	}
	res.send(user);
})

app.listen(3000);