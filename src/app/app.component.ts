import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from '../authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token = 'null';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.setStorage(sessionStorage);

    this.oauthService.tryLogin({}).then((isLoggedIn) => {
      if (this.oauthService.hasValidAccessToken()) {
        this.token = this.oauthService.getAccessToken();
      }
    });
  }

  login(): void {
    this.oauthService.initLoginFlow();
  }

  refresh(): void {
    this.oauthService.refreshToken();
  }

  downloadImage(): void {
    fetch('').then(res => res.blob()).then(blob => console.log(blob))
    fetch('http://192.168.1.48/poc-synchro/medias/D00023-01.jpg').then(res => res.blob()).then(blob => console.log(blob));
  }
}
