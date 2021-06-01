const mongoose = require ("mongoose");

const DB = 'mongodb+srv://root:root@cluster0.flpv1.mongodb.net/Edulogical?retryWrites=true&w=majority';

mongoose.connect(DB,{
     useCreateIndex: true , 
     useUnifiedTopology: true,
     useNewUrlParser:true,
     useFindAndModify:false })
.then( () => console.log("connection successful...") )
.catch( (err) => console.log("connection unsuccessful..."));