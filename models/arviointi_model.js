const db = require('../database');


const arviointi={
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into Arviointi (paivamaara,arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [arviointi.paivamaara,arviointi.arvosana,arviointi.idOpiskelija,arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=?,arvosana=?, idOpiskelija=?, idOpintojakso=? where idArviointi=?',
      [arviointi.paivamaara,arviointi.arvosana,arviointi.idOpiskelija,arviointi.idOpintojakso, id],
      callback
    );
  }

};
          
module.exports = arviointi;