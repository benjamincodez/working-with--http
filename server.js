const express = require('express')
const path = require('path');
//const bodyparser = require('body-parser');
const app = express();

//UNCOMMENT CAREFULLY



//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// set a static folder
app.use(express.static(path.join(__dirname,'public')));




// working with get resquest

//app.post("/contact", (req, res) => {
		//res.send(req.header('content-type'));
//});

// working with post

// app.post("/login", (req, res) => {
// 	if (!req.header('x-auth-token')) {
// 		return res.status(400).send('no token');
// 	}
// 	if (req.header('x-auth-token') !== '123456') {
// 		return res.status(401).send('not authourized');
// 	}
// 	res.send('logged in');
// });

// working with put request
  //app.put('/post/:id', (req, res) => {
// 	// DATABASE STUFF
 //res.json({
	//id: req.params.id,
	//title: req.body.title,
	// });
 //});

// working with delete request
     //app.delete('/post/:id', (req, res) => {
// 	// DATABASE STUFF
	//res.json({ msg: `post ${req.params.id} deleted` });
//})



const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server has started on port ${port}!!!`);
});





































