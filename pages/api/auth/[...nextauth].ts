import NextAuth from 'next-auth';
import Auth0Provider from "next-auth/providers/auth0";
import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_ISSUER,
  authProviderConfig,
} from '../../../config';

export default NextAuth({
  providers: [
    authProviderConfig
      ? authProviderConfig.provider
      : Auth0Provider({
        clientId: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        issuer: AUTH0_ISSUER,
      }),
  ],
});
