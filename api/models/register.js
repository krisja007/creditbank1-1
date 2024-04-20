const { sqlcmd } = require("../config/dbConnect");

class Register {
  constructor(args) {
    Object.assign(this, args);
  }

  static register(
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
  ) {
    const query = `INSERT INTO USERS (TILE, .....) VALUES ('${TITLE}', ${FIRSTNAME})`;   
    return sqlcmd(query);
  }
}

module.exports = Register;
