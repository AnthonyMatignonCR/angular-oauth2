import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://easysysteme.fr',
  redirectUri: window.location.origin + '/',
  loginUrl: 'https://easysysteme.fr/vues/authorize',
  clientId: 'ef204316df44f127ede1d3ea9714c0ef',
  responseType: 'code',
  scope: 'openid user',
  showDebugInformation: true,
  requireHttps: false,
  oidc: true,
  tokenEndpoint: 'https://easysysteme.fr/api/v2/token',
};
