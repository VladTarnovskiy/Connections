import { NgModule } from '@angular/core';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GroupComponent } from './components/group/group.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsComponent,
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
];

@NgModule({
  declarations: [ConnectionsComponent, GroupComponent, PeopleComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ConnectionsModule {}
