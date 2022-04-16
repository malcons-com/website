/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    ignoredRouteFiles: [".*"],
    appDirectory: "app",
    assetsBuildDirectory: "public/website/build",
    serverBuildPath: "build/index.js",
    publicPath: "/build/",
};
