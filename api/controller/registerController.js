const Register = require("../models/register");

const handleRegister = async (req, res) => {
  const {
    Name,
    Nameeeng,
    Lastname,
    Lastnameeng,
    Username,
    Password,
    IDCard,
    Subject,
    School,
    Levelc,
    Tel,
    Title,
    Titleeng,
    Email,
    Role,
  } = req.body;

  try {
    const result = await Register.register(
      Name,
      Nameeeng,
      Lastname,
      Lastnameeng,
      Username,
      Password,
      IDCard,
      Subject,
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
