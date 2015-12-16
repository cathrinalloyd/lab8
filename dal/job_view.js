var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT jv.id, u.fname, u.lname, j.company, jv.description AS job_description FROM UserJobView jv JOIN user_account u ON u.id = jv.id JOIN jobs j ON j.user = jv.id AND j.date_start = jv.date_start AND j.description = jv.description ORDER BY u.lname;',        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}