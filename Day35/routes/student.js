const express = require("express");
const { createStudent, changeMentor, getPreviousMentors } = require("../controllers/studentController");
const router = express.Router();

router.post("/", createStudent);
router.put("/change-mentor", changeMentor);
router.get("/:studentId/previous-mentors", getPreviousMentors);

module.exports = router;
