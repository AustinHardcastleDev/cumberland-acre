# Cumberland Acre

Marketing site for Cumberland Acre, a locally owned cash buyer of land and houses in Middle Tennessee.

## Local development

```bash
npm install
cp .env.example .env.local
# add your Resend API key to .env.local
npm run dev
```

The offer form sends email through Resend to `hello@cumberlandacre.com`. Keep `RESEND_API_KEY` in Vercel environment variables — never commit it.

The sending domain (`cumberlandacre.com`) needs to be verified in Resend for production mail to go out.
