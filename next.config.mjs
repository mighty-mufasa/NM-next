import createNextIntlPlugin from 'next-intl/plugin';
<<<<<<< HEAD
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);
=======

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.seadn.io',
      'remilio.org',
      'elementals-images.azuki.com',
      'ipfs.io',
      'api.memeland.com',
      'www.larvalabs.com',
      'metadata.degods.com',
      'api.pudgypenguins.io',
      'captainz-api.memeland.com',
      'cryptopunks.app'
    ],
  },
};

export default withNextIntl(nextConfig);
>>>>>>> 01bb2b1 (deploy)
