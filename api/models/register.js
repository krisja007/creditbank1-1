const { sqlcmd } = require("../config/dbConnect");

class Register {
  constructor(args) {
    Object.assign(this, args);
  }

  static register(
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
    Role,
    Online
  ) {
    const query = `INSERT INTO USER (Name,Nameeng,Lastname,Lastnameeng,Username,Password,IDCard,School,Levelc,Tel,Title,Titleeng,Role, Email, Online) VALUES ("${Name}","${Nameeng}","${Lastname}","${Lastnameeng}","${Username}","${hashPass}","${IDCard}","${School}","${Levelc}","${Tel}","${Title}","${Titleeng}","${Role}", "${Email}", ${Online})`;
    return sqlcmd(query);
  }

}

module.exports = Register;
