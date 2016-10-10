import { Component } from '@angular/core';
export class Subsciber {
  name: string;
  email: string;
  lastExercise: string;
  lastLogin: int;
}
const SUBS: Subsciber[] = [
  {name: 'Mr. Nice', email: 'MNice@gmail.com', lastExercise: 'pull up', lastLogin: 6},
  {name: 'Narco',  email: 'Narc@gmail.com', lastExercise: 'Sprint', lastLogin: 36},
  {name: 'Bombasto',  email: 'Bomb@gmail.com', lastExercise: 'bench press', lastLogin: 1},
];
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Users</h2>
    <ul class="subscribers">
      <li *ngFor="let subscriber of subscriberes"
        [class.selected]="subscriber === selectedSubscriber"
        (click)="onSelect(subscriber)">
        {{subscriber.name}}
      </li>
    </ul>
    <div *ngIf="selectedSubscriber">
      <h2>{{selectedSubscriber.name}} details!</h2>
      <div><label>Name:  </label>{{selectedSubscriber.name}}</div>
      <div><label>E-mail:  </label>{{selectedSubscriber.email}}</div>    
      <div><label>Last Excercise: </label>{{selectedSubscriber.lastExercise}}</div>
      <div><label>Last Login: </label>{{selectedSubscriber.lastLogin}} day(s) ago</div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .subscribers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .subscribers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em;
      padding-left: 1em;
      height: 1.6em;
      border-radius: 4px;
    }
    .subscribers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .subscribers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .subscribers .text {
      position: relative;
      top: -3px;
    }
  `]
})
export class AppComponent {
  title = 'List of Subscribers';
  subscriberes = SUBS;
  selectedSubscriber: Subsciber;
  onSelect(subscriber: Subsciber): void {
    this.selectedSubscriber = subscriber;
  }
}
