const Student = require("../models/student");
const Mentor = require("../models/mentor");

exports.createStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newStudent = await Student.create({ name, email });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.changeMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);

    if (student.mentor) {
      student.previousMentors.push(student.mentor);
    }

    student.mentor = mentorId;
    await student.save();

    res.status(200).json({ message: "Mentor changed successfully", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPreviousMentors = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("previousMentors");
    res.status(200).json(student.previousMentors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
