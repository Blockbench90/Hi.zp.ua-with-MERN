 В файле package.json есть раздел скрипты, которые можно модифицировать и запускать из терминала, для простоты в разработке

 "scripts": {
    "start": "node app.js",   - при запуске команды npm run start будет запускааться сервер
    "server": "nodemon app.js"  - при запуске команды npm run start будет запускааться сервер, но уже с утилитой nodemon, так он будет сам перезагружаться, при малейшем изминении
      "client": "npm run start --prefix client",  - запускает клиентскую часть, фронт
        "dev": "concurrently \"npm run server\" \"npm run client\"" - с помощью concurrently запускает и то и то, удабная хрень
  },