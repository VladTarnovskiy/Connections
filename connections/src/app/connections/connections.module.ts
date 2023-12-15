import { NgModule } from '@angular/core';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GroupsComponent } from './components/groups/groups.component';
import { PeopleComponent } from './components/people/people.component';
import { GroupComponent } from './components/group/group.component';
import { PersonComponent } from './components/person/person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { GroupRemoveComponent } from './components/group-remove/group-remove.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsComponent,
  },
  {
    path: 'group/create',
    component: ModalComponent,
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
];

@NgModule({
  declarations: [
    ConnectionsComponent,
    GroupsComponent,
    PeopleComponent,
    GroupComponent,
    PersonComponent,
    GroupFormComponent,
    GroupRemoveComponent,
  ],
  imports: [SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class ConnectionsModule {}
