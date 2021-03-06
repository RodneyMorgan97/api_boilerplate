const winston = require('winston');
const fs = require('fs');
var path = require('path');
const logDir = path.resolve(`${__dirname}/../logs`);

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
  
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: `${logDir}/combined.log` }),
        new winston.transports.File({ filename: `${logDir}/error.log`, level: 'error'})
    ]
});

module.exports = logger;