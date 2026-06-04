/** @type {import('next').NextConfig} */
const repoName = "live_airdosa";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
};

export default nextConfig;
