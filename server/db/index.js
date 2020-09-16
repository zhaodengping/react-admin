const mysql=require('mysql');

const config={
    host:"localhost",
    user:"root",
    password:'password',
    database:'test',
    port:3306,
    multipleStatements:true
}
const pool=mysql.createPool(config);//创建连接池
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {//连接数据库
            if (err) {
                reject(err)//连接数据库失败
            } else {
                connection.query(sql, values, (err, rows) => {//进行数据库操作
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};
module.exports={
    query
}