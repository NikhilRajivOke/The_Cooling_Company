var express = require('express');
require('dotenv').config();
var app = new express();
var mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const dburl = process.env.DB_URL;
var Schema = mongoose.Schema;
var BlogsSchema = mongoose.Schema({
    media:String,
    bloghead:String,
    blogbody:String,

},{"collection":"blogs"});

var Blogs = mongoose.model("Blogs",BlogsSchema);
const OAuth2Client = new OAuth2(
    process.env.API_OAUTH2_KEY,
    process.env.API_OAUTH2_PASS,
    process.env.API_OAUTH2_LINK,
);

OAuth2Client.setCredentials({
    refresh_token: process.env.API_REFRESH,
});

const access_token = OAuth2Client.getAccessToken();
var bodyparser = require('body-parser');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-type,Accept");
    next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.API_USER,
        clientId: process.env.API_KEY,
        clientSecret: process.env.API_PASS,
        refreshToken: process.env.API_REFRESH,
        accessToken: access_token
    }
});


app.post('/cus', (req, res) => {
    console.log("Backend Connected");
    var name = req.body.name;
    var client = false;
    var owner = false;
    console.log(name);
    const mailOptionsClient = {
        from: "thecoolcompmailer@gmail.com",
        to: req.body.email_id,
        subject: "Thanks for connecting with us!",
        generateTextFromHTML: true,
        html: "<p><b>Hi</b><h3><b>" + req.body.name + "</b></h3></p><br/><p>Thank you for Connecting with us .<br> We will reach out to you soon !</p><br/><br/><p>Cheers!</p><br/><br/><p>Thanks & Regards<br/>Kiran Sapali<br/>The Cooling Company</p>",
    };

    const mailOptionsOwner = {
        from: "thecoolcompmailer@gmail.com",
        to: "nikhilokay97@gmail.com",
        subject: "Client Enquiry!!",
        generateTextFromHTML: true,
        html: "<p><b>Hi Kiran,</b><h3><p>There is a client enquiry !<br/> The client details are as follows <br/> name : " + req.body.name + " <br/> email :  " + req.body.email_id + "<br/> phone number : " + req.body.phone + "<br/> Company name : " + req.body.company + "<br/> requirement : " + req.body.help + " </p> <br/><br/><p>Goodluck !! Go grab it ! </p>",
    }
    smtpTransport.sendMail(mailOptionsClient, (error, response) => {
        error ? console.log(error) : smtpTransport.sendMail(mailOptionsOwner, (error, response) => {
            error ? console.log(error) : res.json({ "msg": "Both mail sent succesfully" });
            smtpTransport.close();
        })
    });

});

app.post('/blog',(req,res)=>{
    const blog_media=req.body.media;
    const blog_head=req.body.blog_data.bloghead;
    const blog_body=req.body.blog_data.blogbody;

    let blogdata = new Blogs({
        media:blog_media,
        bloghead:blog_head,
        blogbody:blog_body,
    });
    /*console.log(blog_media);
    console.log(blog_head);
    console.log(blog_body);*/
    mongoose.connect(dburl,(err)=>{
        if(err){
           res.json({msg:err});
           console.log("Failed");
        }
        else
        {
            console.log("DB connected");
            blogdata.save((err,doc)=>{
                if(err){
                    res.json({"msg":"Error adding data"});
                }
                else
                {
                    //console.log(doc);
                    res.json({"status":200,"msg":"added successfully"});
                }
            
            })
        }
    })
    //res.json({msg:"received data"});
});

app.get('/getBlogdata',(req,res)=>{
    mongoose.connect(dburl,(err)=>{
        if(err){
            console.log("Connection error");
        }
        else
        {
            Blogs.find({},(err,doc)=>{
                if(err)
                {
                    res.json({"status":500,"msg":err});
                }
                else
                {
                    res.json({status:200,"msg":doc});
                }
            });

            
        }
    })
});

app.get('/initBlog/:head',(req,res)=>{
     const head=req.params.head;
     console.log("Head value : ", head)
     mongoose.connect(dburl,(err)=>{
         if(err){
             res.json({status:500,msg:"Cant Connect to DB"});
         }
         else{
             Blogs.find({bloghead:head},(err,doc)=>{
                 if(err){
                     console.log(err);
                 }
                 else
                 {
                    res.json({status:200,data:doc[0]});
                 }
             })
         }
     })
    
});
app.post('/addsubscriber',(req,res)=>{
    console.log("Function called");
    const email = req.body.email;
    const mailSubscribe = {
        from: "thecoolcompmailer@gmail.com",
        to: email,
        subject: "Subscription",
        generateTextFromHTML: true,
        html: "<p>Hi,<br/><br/>Thanks For Subscribing to our Blogs !!<br/> Thanks and Regards ,<br/>The Cooling Company</p>",
    }
    smtpTransport.sendMail(mailSubscribe, (error, response) => {
        error ? res.json({status:404,msg:error}) : res.json({status:200,msg:"Thanks for subscribing!"})
           
            smtpTransport.close();
    });
    
});
    app.listen(4004, () => console.log("Server listening on port 4004"));

