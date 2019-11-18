module.exports = {
    port: process.env.PORT || 3001,
    secret: 'my23sec45ret7853',
    mongoose: {
      uri: process.env.MONGO_URL || 'mongodb://adli:iSt2gk_6@ds123146.mlab.com:23146/stal',
      options: {
        server: {
          socketOptions: {
            keepAlive: 1
          },
          poolSize:      5
        }
      }
    },
    // process.cwd() - ВЫВОДИТ ТЕКУЩУЮ РАБОЧУЮ ДИРЕКТОРИЮ NODEJS
    root: process.cwd()
  };
  