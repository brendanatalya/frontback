const mysql = require("mysql2");

// criar a conexão
const cn = mysql.createPool({
   host:'localhost',
   user :'root',
   password:'',
   database:'pam_2'  
});

module.exports = cn.promise();