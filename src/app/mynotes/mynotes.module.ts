import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MynotesPageRoutingModule } from './mynotes-routing.module';

import { MynotesPage } from './mynotes.page';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MynotesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MynotesPage]
})
export class MynotesPageModule {}
