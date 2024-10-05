/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "tsx", "js", "jsx"],
  reactStrictMode: true,

  webpack: (config) => {
    config.cache = false;

    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.find(
        (rule) =>
          Array.isArray(rule.use) &&
          rule.use.find((loader) => loader.loader === "sass-loader")
      );

    if (rules) {
      rules.use.push({
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              [
                "autoprefixer",
                {
                  overrideBrowserslist: ["last 2 versions", ">1%"],
                  flexbox: "no-2009",
                },
              ],
            ],
          },
        },
      });
    }

    return config;
  },
};

export default nextConfig;
