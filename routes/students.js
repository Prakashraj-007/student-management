const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

const auth = require('../middleware/auth');

// @route   GET api/students
// @desc    Get all students
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const students = await Student.find().sort({ date: -1 });
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/students
// @desc    Add new student
// @access  Private
router.post('/', auth, async (req, res) => {
  const { name, email, rollNumber, department, year } = req.body;

  try {
    let student = await Student.findOne({ rollNumber });
    if (student) {
      return res.status(400).json({ msg: 'Student already exists' });
    }

    student = new Student({
      name,
      email,
      rollNumber,
      department,
      year
    });

    await student.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/students/:id
// @desc    Update student
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, rollNumber, department, year } = req.body;

  // Build student object
  const studentFields = {};
  if (name) studentFields.name = name;
  if (email) studentFields.email = email;
  if (rollNumber) studentFields.rollNumber = rollNumber;
  if (department) studentFields.department = department;
  if (year) studentFields.year = year;

  try {
    let student = await Student.findById(req.params.id);

    if (!student) return res.status(404).json({ msg: 'Student not found' });

    student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: studentFields },
      { new: true }
    );

    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/students/:id
// @desc    Delete student
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);

    if (!student) return res.status(404).json({ msg: 'Student not found' });

    await Student.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Student removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
