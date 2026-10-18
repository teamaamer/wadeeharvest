// Site-wide settings. Change the contact email here and it updates everywhere.
export const CONTACT_EMAIL = "wadee.harvest@gmail.com";

// Web3Forms delivers the site's forms to CONTACT_EMAIL.
// Access keys are public by design (they can only send to the inbox they
// were created for). NEXT_PUBLIC_WEB3FORMS_KEY in Vercel overrides this.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
