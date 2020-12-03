const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URI);

module.exports = () => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                host: config.host,
                port: config.port,
                database: config.database,
                username: config.user,
                password: config.password,
            },
            options: {
                ssl: false,
            },
        },
    },
});
