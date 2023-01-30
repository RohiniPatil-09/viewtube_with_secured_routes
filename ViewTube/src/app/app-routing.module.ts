import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './login/user.service';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [
  {
    component: StudioLivestreamComponent,
    path: 'livestream',
    canActivate:[UserService]
  },
  {
    component: StudioUploadComponent,
    path: 'upload',
    canActivate:[UserService]
  },
  {
    component: VideoContentComponent,
    path: ''
  },
  {
    component: LoginComponent,
    path: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
