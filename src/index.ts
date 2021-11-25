import http from "http";
import express, { Request, Response, NextFunction } from 'express';
import { verifyJWT, loginJWT } from "./middleware/verifyJWT";
import bodyParser from "body-parser";
import helmet from "helmet";

const PORT = 3000;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request: Request, response: Response) => {
  return response.send("Express + TypeScript Server");
});

//authentication
app.post("/login",loginJWT, (request:express.Request, response:express.Response, next: NextFunction) => {
  console.log();
});

app.post("/logout", function (req: express.Request, res: express.Response) {
  res.json({ auth: false, token: null });
});

app.post("/home", verifyJWT, function (req: express.Request, res: express.Response, next: NextFunction) {
  res.send("Express + TypeScript Server");
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

