import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

const config = withPlugins([withTM(['some-module'])], {
  reactStrictMode: true,
});

export default config;