import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { ServersService } from './servers/servers.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolverService } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ServersService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService,
    ServerResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
