import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { PostListComponent } from './posts/post-list/post-list.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePostComponent,
    PostListComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
