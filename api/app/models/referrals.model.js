import connection from "./connection.js";

// constructor
class ReferralsModel {
  constructor(user) {
    this.id = user.id;
    this.tgId = user.tgId;
    this.ref_address = user.ref_address;
    this.created_date = user.created_date;
  }

  static add = (data) => {
    connection.query("INSERT INTO referrals SET ?", data, (err, res) => {
      if (err) console.log("error: ", err);
    });
  };

  static find = (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM referrals WHERE tgId = "${data.tgId}" AND ref_address = "${data.ref_address}"`,
        (err, res) => {
          if (err) {
            reject(err);
            return;
          }
          if (res.length) {
            resolve(res[0]);
            return;
          }
          resolve(null);
        }
      );
    });
  };
}

export default ReferralsModel;
