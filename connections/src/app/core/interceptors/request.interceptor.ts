import { IUserDataStorage } from './../../auth/models/registration';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userDetailsStorage = localStorage.getItem('userDetailsConnections');
    if (userDetailsStorage) {
      const userDetails = JSON.parse(userDetailsStorage) as IUserDataStorage;
      const authReq = req.clone({
        headers: req.headers
          .set('rs-uid', userDetails.uid)
          .set('rs-email', userDetails.email)
          .set('Authorization', `Bearer ${userDetails.token}`),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
