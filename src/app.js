const express = require("express");               //for require express

require("./db/conn");

const Coaching = require("./models/coaching");
const Resource = require("./models/resources");
const Exam = require("./models/exams");

const app = express(); 
const port = process.env.PORT || 7001;

app.use(express.json());


//create a new student using promise function

// app.post("/students",(req,res) =>{                                          // getting data
    
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() =>{
//         res.status(201).send(user);
//     }).catch((e) =>{
//         res.status(400).send(e);
//     })

// })

//USING ASYNC AWAIT FOR COACHING
// app.post("/coaching",async(req,res) => {
//     const user = new Coaching(req.body);

// try{
//     const user = new Coaching(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);

// }catch(e){ res.status(400).send(e);}

// })

// app.listen(port,() => {
//     console.log(`listening at ${port}`);
//   })              



//USING ASYNC AWAIT FOR RESOURCES
// app.post("/resources",async(req,res) => {
//     const user = new Resource(req.body);

// try{
//     const user = new Resource(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);

// }catch(e){ res.status(400).send(e);}

// })

// app.listen(port,() => {
//     console.log(`listening at ${port}`);
//   })          

  //USING ASYNC AWAIT FOR exams
// app.post("/exams",async(req,res) => {
//     const user = new Exam(req.body);

// try{
//     const user = new Exam(req.body);
//     const createUser = await user.save();
//     res.status(201).send(createUser);

// }catch(e){ res.status(400).send(e);}

// })

// app.listen(port,() => {
//     console.log(`listening at ${port}`);
//   })       


  

  //reading data of registered coaching(i.e. handling GET request). this will give us all the data

  app.get("/coaching",async(req,res) => {

    try{
    const coachData = await Coaching.find();
    res.status(201).send(coachData);

    }catch(e){ res.status(400).send(e);}

})


app.listen(port,() => {
         console.log(`listening at ${port}`);
       })  

//reading data of exams (i.e. handling GET request). this will give us all the data

// app.get("/exams",async(req,res) => {

//     try{
//     const examData = await Exam.find();
//     res.status(201).send(examData);

//     }catch(e){ res.status(400).send(e);}

// })


// app.listen(port,() => {
//          console.log(`listening at ${port}`);
//        }) 

//reading data of resources (i.e. handling GET request). this will give us all the data

// app.get("/resources",async(req,res) => {

//     try{
//     const resourceData = await Resource.find();
//     res.status(201).send(resourceData);

//     }catch(e){ res.status(400).send(e);}

// })


// app.listen(port,() => {
//          console.log(`listening at ${port}`);
//        }) 
    


//getting data of individual student
// app.get("/students/:id",async(req,res) => {

//   try{
//   const _id = req.params.id;
//   const studentData = await Student.findById(_id);
//   console.log(studentData);  
//     if(!studentData){
//         return res.status(404).send();        
//     }else{
//       res.status(201).send(studentData);
//     }

//   }catch(e){ res.status(400).send(e);}

// })


// app.listen(port,() => {
//        console.log(`listening at ${port}`);
//      })      


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
