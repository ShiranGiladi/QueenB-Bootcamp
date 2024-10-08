const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// get all users
router.get("/getAllUsers", controller.getAllUsers);

// get all mentors route
router.get("/mentors", controller.getMentors);

// add mentor route
// router.post("/mentors", controller.addMentor);

// delete mentor route
router.delete("/deleteMentors/:email", controller.deleteMentor);

// update mentor route
router.put("/updateMentorsDetails", controller.updateMentor);

// signup route
router.post("/signup", controller.signup);

// login route
router.post("/login", controller.login);

router.get("/getMentorDetailsByEmail/:email", controller.getMentorDetailsByEmail)

// delete mentee route
router.delete("/deleteMentees/:email", controller.deleteMentee);

// get mentors by search route
router.get("/searchMentors/:searchWord", controller.searchMentors)

// get messages route
router.get("/getMessages/:email", controller.getMessages)

// send message route
router.post("/sendMessage/:email", controller.sendMessage)

// send message route
router.delete("/deleteMessage/:id", controller.deleteMessage)

// get number of messages route
router.get("/getNumberMessages/:email", controller.getNumberMessages)

module.exports = router;
