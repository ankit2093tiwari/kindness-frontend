/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  basePath: "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
     NEXT_PUBLIC_NEXT_APP_ENV: process.env.NEXT_PUBLIC_NEXT_APP_ENV,
     NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
     NEXT_PUBLIC_BASEURL: process.env.NEXT_PUBLIC_BASEURL,
     NEXT_PUBLIC_BASE_LIVE_URL: process.env.NEXT_PUBLIC_BASE_LIVE_URL,
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
     NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  },
};

module.exports = nextConfig;
