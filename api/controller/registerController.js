const Register = require("../models/register");
const bcrypt = require('bcrypt');

const handleRegister = async (req, res) => {
  const {
    Name,
    Nameeeng,
    Lastname,
    Lastnameeng,
    Username,
    Password,
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
    const hashpass = await bcrypt.hash(Password,10)
    const result = await Register.register(
      Name,
      Nameeeng,
      Lastname,
      Lastnameeng,
      Username,
      hashpass,
      IDCard,
      School,
      Levelc,
      Tel,
      Title,
      Titleeng,
      Email,
      Role,
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  handleRegister,
};
