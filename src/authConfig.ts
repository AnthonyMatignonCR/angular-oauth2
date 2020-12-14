import {AuthConfig} from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://localhost',
  redirectUri: window.location.origin + '/',
  loginUrl: 'https://localhost/vues/authorize',
  clientId: '4b0041110efa883e1555f4a6024f7da1',
  dummyClientSecret: 'a588dd51435afa7a9d2b61a51f008ecd349eff44d36de246bff9400efb7193bc6b4cf6a780b0111e52ba76a4af57ab4eb4508c830defed50a4d9c20087ea03d9',
  responseType: 'code',
  scope: 'openid user',
  showDebugInformation: true,
  requireHttps: false,
  oidc: true,
  tokenEndpoint: 'https://localhost/api/v2/token',
};
