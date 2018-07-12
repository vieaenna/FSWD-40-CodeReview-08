import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDitKVtJvhK79WG7_h2H7QfVwqUn_aNTOs",
    authDomain: "cr-dating-app.firebaseapp.com",
    databaseURL: "https://cr-dating-app.firebaseio.com",
    projectId: "cr-dating-app",
    storageBucket: "cr-dating-app.appspot.com",
    messagingSenderId: "342295876395"
};

const appRoutes: Routes = [
{
  path: '', component: MembersComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
