const Movie = require("./model");

exports.addMovie = async (titleStr, actorStr,bioStr,dateStr) =>{
    try{
        await Movie.create({ title: titleStr, actor: actorStr, bio:bioStr, release_date:dateStr,});
        return "created successfully.";
    } catch (error) {
        console.log(error);
    }
};

exports.findUpdate = async  (updatefield, title ,newinfo) =>{
  try{
    if(updatefield ==="title"){
      await Movie.updateOne({title:title},{release_date:newinfo} )
    }
    return "Movie info updated.";
  } catch(error){
    console.log(error)
  }
};

   exports.deleteOne = async(deleteTitle) =>{
    try{
      await Movie.deleteOne({title:deleteTitle});
       return "The previous title has been deleted.";
    }catch(error){
      console.log(error)
    }
  };

exports.list = async () => {
    try {
      return await Movie.find({});
    } catch (error) {
      console.log(error);
    }
  };