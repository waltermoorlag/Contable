const crypto = require("crypto");

import { instantQuery } from "../negocio/connectdb";

export class Usuario {
    nombre: string;
    apellido: string;
    razon_social: string;
    cuit: string;
    tipo_usuario: string;
    mail: string;
    password: string;

    hashUser: string;

    constructor(obj: any) {
        this.nombre = obj.nombre || "";
        this.apellido = obj.apellido || "";
        this.razon_social = obj.razon_social || "";
        this.cuit = obj.cuit || "";
        this.tipo_usuario = obj.tipo_usuario || "";
        this.mail = obj.mail || "";
        const passHash = crypto.createHash("md5").update(obj.pwd || "1234").digest("hex");
        this.password = passHash;
        this.hashUser = crypto.createHash("md5").update(obj.mail + passHash).digest("hex");
    }
    insert() {
        let stringselect = "";
        stringselect += "INSERT INTO usuarios(";
        stringselect += " mail, nombre, apellido, razon_social, cuit, tipo_usuario, _password )";
        stringselect += " VALUES ( ";

        stringselect += "'" + this.mail + "',";
        stringselect += "'" + this.nombre + "',";
        stringselect += "'" + this.apellido + "',";
        stringselect += "'" + this.razon_social + "',";
        stringselect += "'" + this.cuit + "',";
        stringselect += "'" + this.tipo_usuario + "',";
        stringselect += "'" + this.password + "'";
        stringselect += ");";
        return instantQuery(stringselect);
    }
    obtener_byUser(user: string) {
        let stringselect = "";
        stringselect += "SELECT ";
        stringselect += "* from usuarios ";
        stringselect += "where mail='" + user + "'";
        return instantQuery(stringselect);
    }
}

// module.exports = { Usuario };