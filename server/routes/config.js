
var {SqlConfig,sql} = require('@frangiskos/mssql');

 SqlConfig = {
    user: 'replic',
    password: 'replic',
    server: '192.168.100.18',
    database: 'sotisnew'
};


try {
    sql.init(SqlConfig);
}
catch (error) {
    console.error(error);
}



module.exports = sql;