var express = require('express');
var app = new express();
var mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const dburl = "mongodb://localhost:27017/thecoolcomp";
var Schema = mongoose.Schema;
var BlogsSchema = mongoose.Schema({
    media:String,
    bloghead:String,
    blogbody:String,

},{"collection":"blogs"});

var Blogs = mongoose.model("Blogs",BlogsSchema);
const OAuth2Client = new OAuth2(
    "250449147186-sjrgmgr7dfq9u9k7u0ol411674t6badc.apps.googleusercontent.com",
    "jKOO2THRVatD66iAG8w8-6DJ",
    "https://developers.google.com/oauthplayground"
);

OAuth2Client.setCredentials({
    refresh_token: "1//04PrwV0bIXYTxCgYIARAAGAQSNwF-L9IrBEEVuwHUCUo6k0K3_kC5DW8sabRjSufcVllH2OBMxA-Cw7U_2cbEZEI9GWPWgvBu260",
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
        user: "thecoolcompmailer@gmail.com",
        clientId: "250449147186-nc5r239p838v4bu580kbtp55kbku93jq.apps.googleusercontent.com",
        clientSecret: "O8lTjxezIeBqbhqDQf0X41Yp",
        refreshToken: "1//042wRsrS2my-TCgYIARAAGAQSNgF-L9IrGG0RiWEycDI4yXIeMCGuBmHdihtG6_DKEzYMcmA3oJ0s0ASw1o9bwzpcHeLjoDjmMA",
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
                    //console.log(doc);
                    res.json({status:200,"msg":doc});
                }
            });

            
        }
    })
})
    app.listen(4004, () => console.log("Server listening on port 4004"));

