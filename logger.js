const {createLogger,transports,format} = require('winston');

const logger = createLogger({
    transports:[
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        })
    ]
})

const loggerMiddleware = (req, res, next) => {
    logger.log('info', `${req.method} ${req.url}`);
    next();
};

module.exports = { logger, loggerMiddleware };