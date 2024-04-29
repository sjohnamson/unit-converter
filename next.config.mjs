/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(import.meta.url);

const nextConfig = {
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
      },
};

export default nextConfig;
