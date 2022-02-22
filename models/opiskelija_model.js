const db = require('../database');

const Opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from Opiskelija where id_Opiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Opiskelija', callback);
  },
  add: function(Opiskelija, callback) {
    return db.query(
      'insert into Opiskelija (etunimi,sukunimi,osoite) values(?,?,?,?)',
      [Opiskelija.etunimi, Opiskelija.sukunimi, Opiskelija.osoite,Opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opiskelija where id_Opiskelija=?', [id], callback);
  },
  update: function(id, Opiskelija, callback) {
    return db.query(
      'update Opiskelija set etunimi=?,sukunimi=?, osoite=? luokkatunnus=? where id_Opiskelija=?',
      [Opiskelija.etunimi, Opiskelija.sukunimi, Opiskelija.osoite,Opiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = Opiskelija;