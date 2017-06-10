import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { categoryPostPage } from './categoryPost';

@NgModule({
  declarations: [
    categoryPostPage,
  ],
  imports: [
    IonicPageModule.forChild(categoryPostPage),
  ],
  exports: [
    categoryPostPage
  ]
})
export class SinglepostPageModule {}
