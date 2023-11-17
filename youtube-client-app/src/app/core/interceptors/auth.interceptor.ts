import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const KEY = 'AIzaSyA3HVbW6KQggRiqqxjqzxImada9IlHg390';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authReq = req.clone({
      params: req.params.set('key', KEY),
    });
    return next.handle(authReq);
  }
}
