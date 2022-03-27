import { client } from "./index.js";
import { ObjectId } from "mongodb";


export async function getUserDetailById(id) {
   console.log(id, ObjectId(id));
   return await client
      .db("b30wd")
      .collection("userdetails")
      .findOne({ _id: ObjectId(id) });
}


export async function createUserDetails(data) {

   try{
      const result = await client.db("b30wd").collection("userdetails").insertOne(data);
      return result
   }
   catch(e){
      console.log('user error',e)
   }
}

export async function updateUserDetailById(id, updateData) {
   return await client
      .db("b30wd")
      .collection("userdetails")
      .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

export async function deleteUserDetailById(id) {
   return await client
      .db("b30wd")
      .collection("userdetails")
      .deleteOne({ _id: ObjectId(id) });
}

export async function getAllUserDetails() {
   return await client
      .db("b30wd")
      .collection("userdetails")
      .find({})
      .toArray();
}