import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TopDetailsComponent } from './components/top-details/top-details.component';
import { SideDetailsComponent } from './components/side-details/side-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FooterComponent } from './components/footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from 'primeng/tooltip';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TagModule } from 'primeng/tag';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopDetailsComponent, SideDetailsComponent, CommentsComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxApexchartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    DropdownModule,
    ReactiveFormsModule,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    InputTextareaModule,
    MatTooltipModule,
    TooltipModule,
    CascadeSelectModule,
    FormsModule,
    TagModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Add this line to the schemas array
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
