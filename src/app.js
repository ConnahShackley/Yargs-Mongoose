require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, findUpdate,deleteOne} = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      console.log(await addMovie(yargsObj.title, yargsObj.actor,yargsObj.bio, yargsObj.release_date));
      //add functionality
    } 
    else if (yargsObj.list) {
      console.log(await list());
      //list functionality
    }
    else if(yargsObj.update){
      console.log(await findUpdate(yargsObj.updatefield, yargsObj.title, yargsObj.newinfo ));
    }
      else if (yargsObj.delete) {
       console.log(await deleteOne(yargsObj.deleteTitle));
     
    }

    await mongoose.disconnect();
    } catch (error) {
      console.log(error);
    }
  };


  app(yargs.argv);