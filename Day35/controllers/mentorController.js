const Mentor = require("../models/mentor");
const Student = require("../models/student");

exports.createMentor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newMentor = await Mentor.create({ name, email });
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.assignStudents = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;
    const mentor = await Mentor.findById(mentorId);

    const students = await Student.updateMany(
      { _id: { $in: studentIds }, mentor: null },
      { $set: { mentor: mentorId } }
    );

    mentor.students.push(...studentIds);
    await mentor.save();

    res.status(200).json({ message: "Students assigned successfully", students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentsByMentor = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId).populate("students");
    res.status(200).json(mentor.students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
