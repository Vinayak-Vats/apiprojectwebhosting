
const express = require("express");               //for require express

require("./db/conn");

const Coaching = require("./models/coaching");
const Resource = require("./models/resources");
const Exam = require("./models/exams");
const Sign_up = require("./models/sign_up");

const app = express(); 
const port = process.env.PORT || 7001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers","Content-Type");
  next();
})
app.use(express.json());


//create a new student using promise function

//  app.post("/students",(req,res) =>{                                          // getting data
    
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() =>{
//         res.status(201).send(user);
//     }).catch((e) =>{
//         res.status(400).send(e);
//     })

// })

//USING ASYNC AWAIT FOR COACHING
app.post("/createcoaching",async(req,res) => {
    const user = new Coaching(req.body);

try{
    const user = new Coaching(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);

}catch(e){ res.status(400).send(e);}

})
              

//USING ASYNC AWAIT FOR RESOURCES
app.post("/createresources",async(req,res) => {
    const user = new Resource(req.body);

try{
    const user = new Resource(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);

}catch(e){ res.status(400).send(e);}

})
          


//USING ASYNC AWAIT FOR exams
app.post("/createexams",async(req,res) => {
    const user = new Exam(req.body);

try{
    const user = new Exam(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);

}catch(e){ res.status(400).send(e);}

})


// POST USING ASYNC AWAIT FOR SIGN UP PAGE
 app.post("/createsign_up",async(req,res) => {
     const user = new Sign_up(req.body);

 try{
     const user = new Sign_up(req.body);
     const createUser = await user.save();
     res.status(201).send(createUser);

 }catch(e){ res.status(400).send(e);}

 })


  

//Reading data of registered coaching(i.e. handling GET request). this will give us all the data

  app.get("/coaching",async(req,res) => {

    try{
    const coachData = await Coaching.find();
    res.status(200).send(coachData);

    }catch(e){ res.status(400).send(e);}

})
  

// Reading data of exams (i.e. handling GET request). this will give us all the data

app.get("/exams",async(req,res) => {

    try{
    const examData = await Exam.find();
    res.status(200).send(examData);

    }catch(e){ res.status(400).send(e);}

}) 

// Reading data of resources (i.e. handling GET request). this will give us all the data

app.get("/resources",async(req,res) => {

    try{
    const resourceData = await Resource.find();
    res.status(200).send(resourceData);

    }catch(e){ res.status(400).send(e);}

})

// GETTING DATA FOR THE SIGN UP PAGE
app.get("/sign_up",async(req,res) => {

  try{
  const sign_upData = await Sign_up.find();
  res.status(200).send(sign_upData);

  }catch(e){ res.status(400).send(e);}

})


// Getting data of individual coaching
  app.get("/coaching/:id",async(req,res) => {

  try{
  const _id = req.params.id;
  const coachData = await Coaching.findById(_id);
  console.log(coachData);  
    if(!coachData){
        return res.status(404).send();        
    }else{
      res.status(200).send(coachData);
    }

  }catch(e){ res.status(400).send(e);}

})


// Getting data of individual exam
app.get("/exams/:id",async(req,res) => {

  try{
  const _id = req.params.id;
  const examData = await Exam.findById(_id);
  console.log(examData);  
    if(!examData){
        return res.status(404).send();        
    }else{
      res.status(200).send(examData);
    }

  }catch(e){ res.status(400).send(e);}

})



// Getting data of individual resource
app.get("/resources/:id",async(req,res) => {

  try{
  const _id = req.params.id;
  const resourceData = await Resource.findById(_id);
  console.log(resourceData);  
    if(!resourceData){
        return res.status(404).send();        
    }else{
      res.status(200).send(resourceData);
    }

  }catch(e){ res.status(400).send(e);}

})


app.listen(port,() => {
       console.log(`listening at ${port}`);
     })  



// TO put/patch REQUEST USING API
// app.patch("/students/:id",async(req,res) => {

//   try{
//     const _id = req.params.id;
//     const updateStudents = await Student.findByIdAndUpdate(_id,req.body);
//     res.status(201).send(updateStudents);
// }catch(e){ res.status(400).send(e);}
// })
// app.listen(port,() => {
//      console.log(`listening at ${port}`);
//    }) 
     
     
  //To handle DELETE request using API

  // app.delete("/students/:id",async(req,res) => {

  //   try{
  //   const _id = req.params.id;
  //   const deleteStudent = await Student.findByIdAndDelete(req.params.id);
  //   if(!req.params.id){
  //              return res.status(404).send();        
  //          }else{
  //            res.status(201).send(deleteStudent);
  //          }
  //   }catch(e){ res.status(400).send(e);}
  // })
  
  
  // app.listen(port,() => {
  //        console.log(`listening at ${port}`);
  //      }) 
