/** @type {import('next').NextConfig} */
const nextConfig = {
    "publicRuntimeConfig": { //这里的配置既可以服务端获取到，也可以在浏览器端获取到
        "NODE_ENV_API": process.env.NODE_ENV_API || "prod",
      },
}

module.exports = nextConfig
