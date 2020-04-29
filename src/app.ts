import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import path from "path";
import expressValidator from "express-validator";

const bienesPersonales = require("./routes/bienesPersonales");
const User = require("./routes/users");
// const Usuarios = require("./negocio/Users").usuarios;
const cookieParser = require("cookie-parser");


const app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());

// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

const allowCrossDomain = function(req: any, res: any, next: any) {
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.set({
      "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Credentials': true,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Accept, Header, Content-Type, access-control-allow-origin",
      "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
    });
    return res.sendStatus(200);
  }
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "header, Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since",
    // 'Access-Control-Allow-Credentials': true
  });
  next();
};
app.use(allowCrossDomain);

app.use("/user",  User);
app.use("/bienes_personales",  bienesPersonales);

export default app;