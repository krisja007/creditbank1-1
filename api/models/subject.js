const { sqlcmd } = require("../config/dbConnect");

class SUBJECT {
  constructor(args) {
    Object.assign(this, args);
  }

  static addSubject(NAMESUBJECT, DETAILSUBJECT, DATE, TIME, TOTALSTU, POSTSTATUS) {
    const query = `INSERT INTO SUBJECT(NAMESUBJECT , DETAILSUBJECT, DATE, TIME , TOTALSTU, POSTSTATUS) VALUES ("${NAMESUBJECT}", "${DETAILSUBJECT}", "${DATE}","${TIME}","${TOTALSTU}",${POSTSTATUS})`;
    return sqlcmd(query);
  }

  
}

module.exports = SUBJECT;
