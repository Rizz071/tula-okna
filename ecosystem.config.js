// pm2 delete auto.technocomposite.ru
// pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "tula-okna",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};