import Promise from 'bluebird';
import request from 'superagent';

export
class Request{
    constructor(_request){
        this._request = _request.set('Content-Type', 'application/json');
    }
    static get(path){
        return new this(request.get('/api' + path));
    }
    static post(path){
        return new this(request.post('/api' + path));
    }
    static del(path){
        return new this(request.del('/api' + path));
    }
    send(payload) {
        this._request.send(payload);
        return this;
    }
    end(){
        return new Promise((resolve, reject)=>{
            this._request
                .end((err, res)=>{
                    resolve(res.body);
                });
        });
    }
}
