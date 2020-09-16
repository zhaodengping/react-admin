const mysql=require('mysql');

const config={
    host:"localhost",
    user:"root",
    password:'password',
    database:'test',
    port:3306,
    multipleStatements:true
}
const pool=mysql.createPool(config);
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.end()
                })
            }
        })
    })
};
module.exports = {
    query
} 