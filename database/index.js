var mysql      = require('mysql2');

var connection = mysql.createPool({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});


module.exports = (query) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, sql) => {
            if (err) {
                console.error(err)
                return
            }

            sql.query(query, (err, result) => {
                if(err) {
                    console.error(err)
                    reject(err)
                    throw new Error(err)
                } else {
                    resolve(result)
                }

                sql.release()
            })
        })
    })
}