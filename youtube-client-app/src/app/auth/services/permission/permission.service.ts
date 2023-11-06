import { Injectable } from '@angular/core';

@Injectable()
class UserToken {}

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    console.log('check canActivate Guard');
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    console.log('check canMatch Guard');
    return true;
  }
}
