const User = require("./models/User");

const bcrypt =  require('bcrypt')

const express = require("express");

const app = express();

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

app.set('view engine', 'ejs');

app.use('/public/css/', express.static('./public/css'));

const path = require('path')

const templatePath = path.join(__dirname, './templates')

app.set('views',templatePath)

app.use(bodyParser.urlencoded({extended: false,})
);




// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");




app.use(express.json());




 







mongoose.connect('mongodb+srv://umunnachidera014:xKhksPSpupM4kUV7@cluster0.ohv0s.mongodb.net/').then(()=>{

 console.log("server connected")
 }).catch((error)=>{

   console.log(error)

 })

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);







const port = 2000;


app.get('/', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('index', {});


});



app.get('/login', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('login', {});
});


app.get('/signup', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('signup', { });

  
});

app.get('/product', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('product', { });

  
});
app.get('/product', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('product', { });

  
});
app.get('/contact', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('contact', { });

  
});
app.get('/about', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('about', { });

  
});
app.get('/cart', (req, res) => {
  // Render the 'index.ejs' file located in the 'views' folder
  res.render('cart', { });

  
});







app.post("/signup", async (req, res) => {
  const newUser = {

    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)

  }

    
     
  
  
  await User.insertMany([newUser])

  res.render('login')


  });

// LOGIN FORM


app.post('/login', async (req, res) => {
 
 const checkUser =  await User.findOne({username:req.body.username})

 if (!checkUser) {
  
    res.send('invalid credentials')
 }else{

  return res.render('index')
 }

})



  
  
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });



 
  