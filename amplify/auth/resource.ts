import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome! Verify your email!',
      verificationEmailStyle: "LINK",
      verificationEmailBody: (link: string) => `Your verification link is ${link}.`},
  },
});
