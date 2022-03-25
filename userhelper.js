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
   return await client.db("b30wd").collection("userdetails").insertMany(data);
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