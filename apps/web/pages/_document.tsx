/* eslint-disable @next/next/next-script-for-ga */

import { Head, Html, Main, NextScript } from 'next/document'
import { SITE_DESCRIPTION, SITE_TITLE } from '../globals'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={BASE_URL} />
        {/* og */}
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={SITE_TITLE} />
        <meta
          name="og:description"
          property="og:description"
          content={SITE_DESCRIPTION}
        />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:url" content={BASE_URL} />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
