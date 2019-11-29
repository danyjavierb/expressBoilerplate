import express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
import swaggerify from './swagger';
import l from './logger';
import mongo from './../config/mongo'

const fs = require('fs');
const app = new express();

var migrate = require('migrate')


export default class ExpressServer {
    constructor() {
        const root = path.normalize(__dirname + '/../..');
        app.set('appPath', root + 'client');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(cookieParser(process.env.SESSION_SECRET));
        app.use(express.static(`${root}/public`));
        mongo.connect().then(r => {
            mongo.clearDatabase().then(() => {
                l.info(`Connected to Mongo in ${r.connections["0"].host}: ${r.connections["0"].port}}`);
                const path = root + '/migrate';
                fs.unlink(path, (err) => {
                    migrate.load({
                        stateStore: 'migrate'
                    }, function (err, set) {
                        if (err) {
                            throw err
                        }
                        set.up(function (err) {
                            if (err) {
                                throw err
                            }
                            console.log('migrations successfully ran')
                        })
                    })
                })
            })
        }).catch((err) => {
            l.error(`Unable to connect to Mongo`);
        })
    }

    router(routes) {
         swaggerify(app, routes)

        return this;
    }

    listen(port = process.env.PORT) {
        const welcome = port => () => l.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${port}}`);
        http.createServer(app).listen(port, welcome(port));
        return app;
    }
}