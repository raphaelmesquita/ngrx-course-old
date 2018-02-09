import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UserSelectionComponent } from "./user-selection/user-selection.component";
import { ThreadSectionComponent } from "./thread-section/thread-section.component";
import { MessageSectionComponent } from "./message-section/message-section.component";
import { ThreadListComponent } from "./thread-list/thread-list.component";
import { MessageListComponent } from "./message-list/message-list.component";
import { ThreadService } from "./services/thread.service";


@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
