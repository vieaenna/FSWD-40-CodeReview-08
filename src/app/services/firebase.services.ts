/* tslint:disable */
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';


@Injectable()

// FirebaseService class needed for interaction with the firebase DB
export class FirebaseService {
    users: FirebaseListObservable<User[]>;
    genders: FirebaseListObservable<Gender[]>;


    constructor(private af: AngularFireDatabase) {

    }
    // Display users and filter them
    getUsers(gender: string = null) {
        // Needed to display 'all' again on dropdown selection
        if (gender === 'all') {
            this.users = this.af.list('/users') as FirebaseListObservable<User[]>;
        }
        // Order output when dropdown is not on default anymore
        else if (gender != null) {
            this.users = this.af.list('/users', {
                query: {
                    orderByChild: 'gender',
                    equalTo: gender
                }
            }) as FirebaseListObservable<User[]>;
        }
        // Needed to display all on load
        else {
            this.users = this.af.list('/users') as FirebaseListObservable<User[]>;
        }
        return this.users;
    }

    getGenders() {
        this.genders = this.af.list('/genders') as FirebaseListObservable<Gender[]>;
        return this.genders;
    }

    // update Onject like value
    increment(UserId, likeValue): void {
        this.af.object('/users/' + UserId).update({likes: likeValue});
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
