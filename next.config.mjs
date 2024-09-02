/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "tsx", "js", "jsx"],
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.cache = {
        type: "filesystem",
        allowCollectingMemory: true,
        buildDependencies: {
          config: [__filename],
        },
      };
    }

    // Desativar o cache para loaders problemáticos
    config.module.rules.forEach((rule) => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach((use) => {
          if (
            typeof use === "object" &&
            use.loader &&
            use.loader.includes("sass-loader")
          ) {
            use.options = {
              ...use.options,
              cache: false,
            };
          }
        });
      }
    });

    return config;
  },
};

export default nextConfig;
