const express = require('express');
const app=express();
const multer  = require('multer')
app.use(express.urlencoded({extended:false}));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'E:\Smondal\client\src\images');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


app.listen('8000',(req,res)=>{
    console.log("server is listening");
})
app.get('/',(req,res)=>{
    res.send("Hello");
})
app.post('/',upload.single('artImage'), (req,res)=>{
    console.log(req.body);
    console.log(req.file);
})