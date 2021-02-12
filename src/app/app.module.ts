import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TaskOverviewComponent } from './task-overview/task-overview.component';
import { TaskListComponent } from './task-list/task-list.component';
import {aboutComponent} from './about-us/about.component';
import {taskmainComponent} from './task-main/task-main.component';
import {AppRoutingModule} from './app-routing.module';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TaskOverviewComponent,
    TaskListComponent,
    aboutComponent,
    taskmainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
