import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  addSuccessToast(detail: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
    });
  }

  handleError(err: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: err.error.type,
      detail: err.error.message,
    });
  }
}
