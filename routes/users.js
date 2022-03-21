import express from "express"; 
import { createUser } from "../helper.js";
const router = express.Router();


router.post("/signup", async function (request, response) {
  // db.users.insertOne(data)
  const data = request.body;
  console.log(data);
  const result = await createUser(data);
  response.send(result);
});

export const usersRouter = router;
