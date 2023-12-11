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
    const authReq = req.clone({
      headers: req.headers
        .set('rs-uid', '')
        .set('rs-email', '')
        .set('Authorization', 'Bearer <TOKEN>'),
    });
    return next.handle(authReq);
  }
}
