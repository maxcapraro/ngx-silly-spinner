import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fullfilledObservable: Observable<string>;

  pendingObservable: Observable<string>;

  rejectedObservable: Observable<string>;

  ngOnInit(): void {

    this.fullfilledObservable = Observable.create(function(observer) {
      observer.next('Test Value');
    });

    this.rejectedObservable = Observable.create();
  }

}
