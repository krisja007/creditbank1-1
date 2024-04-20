const Register = require("../models/register");

const handleRegister = async (req, res) => {
  const {
    TITLE,
    FIRSTNAME,
    LASTNAME,
    TITLEENG,
    FIRSTNAMEENG,
    LASTNAMEENG,
    LEVELC,
    EMAIL,
    USERNAME,
    PASSWORD,
    TEL,
    SCHOOL,
    FILE,
    ROLE,
  } = req.body;

  try {
    const result = await Register.register(
      TITLE,
      FIRSTNAME,
      LASTNAME,
      TITLEENG,
      FIRSTNAMEENG,
      LASTNAMEENG,
      LEVELC,
      EMAIL,
      USERNAME,
      PASSWORD,
      TEL,
      SCHOOL,
      FILE,
      ROLE
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).error({ message: error });
  }
};

module.exports = {
  handleRegister,
};
