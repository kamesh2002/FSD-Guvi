const express = require("express");
const { createMentor, assignStudents, getStudentsByMentor } = require("../controllers/mentorController");
const router = express.Router();

router.post("/", createMentor);
router.put("/assign", assignStudents);
router.get("/:mentorId/students", getStudentsByMentor);

module.exports = router;
