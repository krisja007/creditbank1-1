const SUBJECT = require("../models/subject");
const bcrypt = require("bcrypt");

const handleAddSubject = async (req, res) => {
  const { NAMESUBJECT, DETAILSUBJECT, DATE, TIME, TOTALSTU } = req.body;

  try {
    const POSTSTATUS = 0;
    const result = await SUBJECT.addSubject(
      NAMESUBJECT,
      DETAILSUBJECT,
      DATE,
      TIME,
      TOTALSTU,
      POSTSTATUS
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleAddSubject,
};
