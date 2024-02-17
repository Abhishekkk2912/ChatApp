import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/:id",protectRoute,getMessages);        //this :id is the id of other user....this method is to get convo between other user and current user...
router.post("/send/:id",protectRoute,sendMessage);  //protect route is to check whether user is logged in or not...and this :id is receiver id...

export default router;