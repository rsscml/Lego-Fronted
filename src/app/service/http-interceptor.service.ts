// import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import{Observable} from 'rxjs'
import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
export class HttpInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
    if (!token) token = '';
    // let user = JSON.parse(localStorage.getItem('currentUser'))
    // let token = user ? user.token : ""

    
    let url = req.url;

    console.log(url);

    const copiedReq = req.clone({
        headers: req.headers.append('Authorization', token), url: url
    });
    console.log(copiedReq)
    return next.handle(copiedReq);
  }
}
