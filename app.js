var express = require('express')
var hbs = require('hbs')

var app = express()

var anh = require('path').join(__dirname, '/anh');
app.use (express.static(anh));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false})) //bodyParser dung de lay du lieu nguoi dung
app.set('view engine','hbs')

app.post('/sendDangKy' ,(req,res) =>{
    let nameValue = req.body.txtName;
    let genderValue = req.body.gender;
    let userInfo = {name:nameValue,gender:genderValue};
    res.render('confirm', {model:userInfo});
    //res.write('Name:'+ nameValue)
    //res.write('\nGender:' + genderValue)
    //res.end();
})

app.get('/register',(req,res) =>{
    res.render('dangky')
})
app.get('/',(req,res) =>{
    res.render('index')
})

var PORT = process.env.PORT || 3000 //Port la cong
app.listen(PORT)
console.log('sever is running on:', PORT)