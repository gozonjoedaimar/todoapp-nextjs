require('dotenv').config();

let toEnv = {...process.env};
delete toEnv.NODE_ENV;
delete toEnv.NEXT_RUNTIME;
delete toEnv.__NEXT_PROCESSED_ENV;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: toEnv,
}

module.exports = nextConfig
