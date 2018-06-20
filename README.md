# Dino fact generator
## Dockerized Create-React-App

This is a small react application which will generate dinosaur facts when clicking a button.

![](http://g.recordit.co/XQz8PO2NIY.gif)

---

**Install dependencies**

```sh
$ npm install
```

**Start the application**

```sh
$ npm start
```

**Build the docker image**

```sh
$ docker build -t dinojs/client .
```

**Run the image**

```sh
$ docker run -d -p 3000:3000 dinojs/client
```
