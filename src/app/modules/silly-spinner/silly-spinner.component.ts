import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Component({
  selector: 'silly-spinner',
  templateUrl: './silly-spinner.component.html',
  styleUrls: ['./silly-spinner.component.css']
})
export class SillySpinnerComponent implements OnChanges {

  @Input()
  promise: Promise<any>;

  @Input()
  observable: Observable<any>;

  @Input()
  inline: boolean = false;

  isPending: boolean;

  error: Error;

  ngOnChanges(): void {
    this.initialize();
  }

  private initialize(): void {
    this.isPending = true;
    this.error = null;

    if (this.promise) {
      this.promise
        .then(res => this.isPending = false)
        .catch(err => this.error = new Error(err));
    }
    if (this.observable) {
      this.observable.first().subscribe(
        () => this.isPending = false,
        (error) => this.error = new Error(error)
      );
    }
  }

  getIsPending(): boolean {
    return this.isPending && this.error === null;
  }

  getIsFullfilled(): boolean {
    return !this.isPending && this.error === null;
  }

  getIsRejected(): boolean {
    return this.error !== null;
  }

}
