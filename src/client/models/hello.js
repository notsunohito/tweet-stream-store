import { Request } from './api';


export
class Hello extends Request {
    static world(){
        return this.get('/world').end();
    }
}
