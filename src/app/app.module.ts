import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularProvider } from 'src/providers/PopularProvider/Popular';
import { HttpClientModule } from '@angular/common/http';
import { SearchProvider } from 'src/providers/SearchProvider/Search';
import { CompareProvider } from 'src/providers/CompareProvider/Compare';
import { PlaylistListsProvider } from 'src/providers/PlaylistsListsProvider/PlaylistsList';
import { PlaylistDetailsProvider } from 'src/providers/PlaylistsListsProvider/PlaylistDetails';
import { Backend } from 'src/service/backend';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PopularProvider,
    SearchProvider,
    CompareProvider,
    PlaylistListsProvider,
    PlaylistDetailsProvider,
    Backend
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
