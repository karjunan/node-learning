import "reflect-metadata"; // this shim is required
import { InversifyExpressServer } from "inversify-express-utils";
import { Container, ContainerModule } from "inversify";
import * as express from "express";
import * as bodyParser from "body-parser";
import "./src/controller/PersistController";

const port = process.env.PORT || 3000; // default port to listen

let container = new Container();
// container.bind<PersistController>('PersistController').to(PersistController);

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });
  
  let app = server.build();
  app.listen(port);
  console.log("Server listening on port ", port)