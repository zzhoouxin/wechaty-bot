const superagent = require('superagent');
/**
 * promise调用
 */
function fetch(url) {
    return new Promise(function (resolve, reject) {
      superagent
        .get(url)
        .auth('user', 'password')
        .end((err, res) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(res);
        });
    });
  }


  module.exports = {
    fetch
  }
