import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import consolidate from 'consolidate';
import socketIO from './models/socketIO';


export
class App {
    constructor() {
        this._express = express(),
        this.socket = socketIO,
        this.port,
        this.wsPort;
    }
    get express() {
        return this._express;
    }
    setPort(port) {
        this.port = port;
        return this;
    }
    setWSPort(port) {
        this.wsPort = port;
        return this;
    }
    useMustache() {
        this.express.engine('mustache', consolidate.hogan);
        this.express.set('view engine', 'mustache');
        return this;
    }
    useBodyParser() {
        this.express.use(bodyParser.json());
        return this;
    }
    useCookieParser() {
        this.express.use(cookieParser());
        return this;
    }
    addRouter(basePath, router){
        this.express.use(basePath, router);
        return this;
    }
    use(middleware) {
        this.express.use(middleware);
        return this;
    }
    setViewDir(viewDir) {
        this.express.set('views', path.join(__dirname, viewDir));
        return this;
    }
    setPublicDir(publicDir) {
        this.express.use(express.static(path.join(__dirname, publicDir)));
        return this;
    }
    start() {
        this.express.listen(this.port);
        this.socket.listen(this.wsPort);
        console.log('App started on port:'+ this.port);
        return this;
    }
}
