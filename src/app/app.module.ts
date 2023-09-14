import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CraftingComponent } from './crafting/crafting.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './location/location.component';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from '@angular/material/select'; 
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthOnlyDirective } from './directives/auth-only.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { FilterPipe } from './Pipes/filter.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { CategoryPipe } from './Pipes/category.pipe';
import { ArmiesComponent } from './armies/armies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CraftingComponent,
    PageNotFoundComponent,
    LocationComponent,
    AuthOnlyDirective,
    FilterPipe,
    CategoryPipe,
    ArmiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
