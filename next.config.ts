import type { NextConfig } from 'next';
const redirects = [
  {
    "source": "/aras.html",
    "destination": "/aras-innovator",
    "statusCode": 301
  },
  {
    "source": "/services.html",
    "destination": "/plm-arkitektur",
    "statusCode": 301
  },
  {
    "source": "/about.html",
    "destination": "/om",
    "statusCode": 301
  },
  {
    "source": "/study-week.html",
    "destination": "/plm-study-week",
    "statusCode": 301
  },
  {
    "source": "/resources.html",
    "destination": "/ressourcer",
    "statusCode": 301
  },
  {
    "source": "/privacy.html",
    "destination": "/privatliv",
    "statusCode": 301
  },
  {
    "source": "/cases.html",
    "destination": "/cases",
    "statusCode": 301
  },
  {
    "source": "/contact.html",
    "destination": "/kontakt",
    "statusCode": 301
  },
  {
    "source": "/AboutUs.html",
    "destination": "/om",
    "statusCode": 301
  },
  {
    "source": "/Services.html",
    "destination": "/plm-arkitektur",
    "statusCode": 301
  },
  {
    "source": "/Media.html",
    "destination": "/ressourcer",
    "statusCode": 301
  },
  {
    "source": "/ContactUs.html",
    "destination": "/kontakt",
    "statusCode": 301
  },
  {
    "source": "/Index.html",
    "destination": "/",
    "statusCode": 301
  },
  {
    "source": "/index.html",
    "destination": "/",
    "statusCode": 301
  }
];
const config: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  async redirects() { return redirects; },
  async headers() {
    return [{source:'/:path*',headers:[
      {key:'X-Content-Type-Options',value:'nosniff'},
      {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
      {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}
    ]}];
  }
};
export default config;
