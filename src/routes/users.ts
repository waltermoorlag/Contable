const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Usuarios = require("../negocio/Users").usuarios;
// const Usuario = require("../clases/Usuario");
import { Usuario } from "../clases/Usuario";

const hashpass = crypto.createHash("md5").update("dbtrustdbTrust#1").digest("hex");
router.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "header, Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

// router.get("/obtenerUsuario/:username", function (req: any, res: any) {
//   res.send(req._response);
// });


router.post("/login", function (req: any, res: any) {
  const User = new Usuario({});
  User.obtener_byUser(req.body.mail).then(function (result: any[]) {
    if (result.length == 0) {
      res.send({ login: false, mensaje: "Usuario no registrado" });
    } else {
      const _user = result[0];
      console.log("Usuario:", _user);
      const passHash = crypto.createHash("md5").update(req.body.pwd).digest("hex");
      console.log("Login  :", crypto.createHash("md5").update(req.body.mail + passHash).digest("hex"));
      if (_user._password != passHash) {
        res.send({ login: false, mensaje: "Usuario o contraseña incorrecta" });
      } else {
        res.cookie("cookieUserHash", crypto.createHash("md5").update(req.body.mail + passHash).digest("hex"), { expires: new Date(Date.now() + 900000), httpOnly: true });
        res.cookie("cookieUser", _user.mail, { expires: new Date(Date.now() + 900000), httpOnly: true });
        res.send({ login: true, mensaje: "Usuario logueado" });
      }
    }
  });
  // if (_result)
  // if (encontro) {
  //   res.cookie("cookieHash", element.hashPass, { expires: new Date(Date.now() + 900000), httpOnly: true});
  //   res.cookie("cookieUser", element.user, { expires: new Date(Date.now() + 900000), httpOnly: true});
  //   res.send({error: false, msj: "ok"});
  // } else {
  //   res.send({ error: true, msj: "La combinacion de Usuario y Contraseña es incorrecta"});
  // }
});

router.get("/login", function (req: any, res: any) {
  if (!req.cookies.cookieUser) {
    res.send({ login: false, mensaje: "Redirecto a login" });
  } else {
    const User = new Usuario({});
    User.obtener_byUser(req.cookies.cookieUser).then(function (result: any[]) {
      if (result.length == 0) {
        res.send({ login: false, mensaje: "Usuario no encontrado" });
      } else {
        const hashUser = result[0];
        const __hashUser = crypto.createHash("md5").update(result[0].mail + result[0]._password).digest("hex");
        if (__hashUser != req.cookies.cookieUserHash) {
          res.send({ login: false, mensaje: "Usuario o contraseña incorrecta" });
        } else {
          res.send({ login: true, mensaje: "Usuario logueado" });
        }
      }
    });
  }
});

router.post("/createUser", function (req: any, res: any) {
  const User = new Usuario(req.body);
  if (User.insert()) {
    res.cookie("cookieUserHash", User.hashUser, { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.cookie("cookieUser", User.mail, { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.send({ login: true, mensaje: "Usuario creado con exito" });
  } else {
    res.send({ login: false, mensaje: "Error al intentar crear usuario" });
  }
});

router.get("/login", function (req: any, res: any) {
  // console.log("Cookies:", req.cookies);
  res.send({ User: req.cookies.cookieUser, Pass: req.cookies.cookieHash });
});

module.exports = router;
