import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { CommentsComponent } from './comments/comments.component';
import { ChildboxComponent } from './childbox/childbox.component';
import { DatacontainerDirective } from './comments/comments.component';
import { TrendingComponent } from './trending/trending.component';

import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { GipherService } from './gipher.service';


import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes : Routes =[
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
 
 
  {
    path:'trending',
    component:TrendingComponent
  },
  {
    path:'comments',
    component:CommentsComponent
  },
  
  {
path:'commentbox',
component:CommentboxComponent
  },
  {
    path:'childbox',
    component:ChildboxComponent
  },
 
]
@NgModule({
  declarations: [
    AppComponent,
    CommentboxComponent,
    CommentsComponent,
    ChildboxComponent,
    DatacontainerDirective,
    TrendingComponent
  ],
  providers: [GipherService],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    
    MatToolbarModule,
    
    MatFormFieldModule
  ],
  entryComponents: [ChildboxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
