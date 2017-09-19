import {Component} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent {
  data: FirebaseListObservable<any>;
  datetest;
  constructor (db: AngularFireDatabase) {
    this.data = db.list('/newdata');
  }
  addMesage (test) {
    this.datetest = new Date();
    this.data.push({time: this.datetest, name: 'testname'});
    console.log(this.data);
    console.log('works');
  }
}

