const Register = require("../models/register");
const bcrypt = require("bcrypt");

const handleRegister = async (req, res) => {
  const {
    Name,
    Nameeng,
    Lastname,
    Lastnameeng,
    Username,
    password,
    IDCard,
    School,
    Levelc,
    Tel,
    Title,
    Titleeng,
    Email,
    Role,
  } = req.body;


  try {
    const hashPass = await bcrypt.hash(password, 8);
    const result = await Register.register(
      Name,
      Nameeng,
      Lastname,
      Lastnameeng,
      Username,
      hashPass,
      IDCard,
      School,
      Levelc,
      Tel,
      Title,
      Titleeng,
      Email,
      Role
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleRegister,
};
