var mysql      = require('mysql');

//创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'news'
});

connection.connect();//连接


//表操作
// let sql=`INSERT INTO user (username,password) VALUES('苏菲','sufei123')`;//增
// let sql=`DELETE FROM user WHERE username='苏菲'`;//删
// let sql=`UPDATE user set username='苏菲' WHERE username='sufei'`;//改
let sql=`SELECT * FROM user WHERE username='alex'`;//查
connection.query(sql, function (error, results) {
  // error == 错误
  // results == 结果
  console.log('error',error);//null 没有错误
  console.log('results',results);// 查询结果
  console.log('results',results.affectedRows);//>0 操作成功

  //关闭连接
  connection.end();

});


