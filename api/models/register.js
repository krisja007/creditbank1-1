const { sqlcmd } = require("../config/dbConnect");

class Register {
  constructor(args) {
    Object.assign(this, args);
  }

  static register(
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
  ) {
    const query = `INSERT INTO USERS ( Name,Nameeeng,Lastname,Lastnameeng,Username,Password,IDCard,School,Levelc,Tel,Title,Titleeng,Email,Role,) VALUES ("${Name}","${Nameeeng}","${Lastname}","${Lastnameeng}","${Username}","${Password}""${IDCard}","${School}","${Levelc}","${Tel}","${Title}","${Titleeng}","${Email}","${Role}",)`;
    return sqlcmd(query);
  }
}

module.exports = Register;
