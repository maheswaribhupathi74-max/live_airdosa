/** @type {import('next').NextConfig} */
const repoName = "live_airdosa";

// Only apply static export + basePath for GitHub Pages production builds
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.npm_lifecycle_event === "build:pages";

const nextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),
  images: { unoptimized: true },
};

export default nextConfig;
