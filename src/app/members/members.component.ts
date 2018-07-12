import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FirebaseService } from '../services/firebase.services';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [FirebaseService]
})

export class MembersComponent implements OnInit {
  users: User[];
  genders: Gender[];
  appState: string;
  activeKey: string;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {

    this._firebaseService.getUsers().subscribe(users => {
      this.users = users;
    });

    this._firebaseService.getGenders().subscribe(genders => {
      this.genders = genders;
    });
  }

  filterGender(gender) {
    this._firebaseService.getUsers(gender).subscribe(users => {
      this.users = users;
    });
  }

  addLike(UserId, likeValue) {
    likeValue += 1;
    this._firebaseService.increment(UserId, likeValue);
  }

}


// define Types
export interface User {
  $key?: string;
  sex: string;
  name: string;
  surname: string;
  myPhoto: string;
  age: number;
  inRelation: boolean;
  likes: number;
}

export interface Gender {
  $key?: string;
  sex: string;
}
