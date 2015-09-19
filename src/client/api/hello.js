import { Request } from './request';


export function fetchHelloWorld() {
    return Request.get('/world').end();
}
