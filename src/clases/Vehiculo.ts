// var instantQuery = require('../negocio/connectdb').instantQuery;
import { instantQuery } from "./../negocio/connectdb";
export class Vehiculo {
    usuario: string;
    tipo: string;
    valorcompra: number;
    valorfiscal: number;
    marca: string;
    fabrica: string;
    modelo: string;
    patente: string;
    ano: number;
    fechacompra: string;
    porc_titular: number;
    baja_en_periodo: boolean;
    id_archivo: string;
    constructor(obj: any) {
        this.usuario = obj.usuario || "";
        this.tipo = obj.tipo || "";
        this.valorcompra = obj.valorcompra || 0;
        this.valorfiscal = obj.valorfiscal || 0;
        this.marca = obj.marca || "";
        this.fabrica = obj.fabrica || "";
        this.modelo = obj.modelo || "";
        this.patente = obj.patente || "";
        this.ano = obj.ano || 0;
        this.fechacompra = obj.fechacompra || "";
        this.porc_titular = obj.porc_titular || 0;
        this.baja_en_periodo = obj.baja_en_periodo || false;
        this.id_archivo = obj.id_archivo || "";
    }
    insert() {
        let stringselect = "";
        stringselect += "BEGIN;";
        stringselect += "INSERT INTO relation_vehiculo_user(id_vehiculo,id_usuario) select -1,id_usuario from usuarios where usuario='" + this.usuario + "';";
        stringselect += "INSERT INTO present_vehiculos(";
        stringselect += "  tipo, valorcompra, valorfiscal, marca, fabrica, modelo, patente, ano, ";
        stringselect += "  fechacompra, porc_titular, baja_en_periodo, id_archivo)";
        stringselect += " VALUES ( ";
        stringselect += "'" + this.tipo + "',";
        stringselect += "" + this.valorcompra + ",";
        stringselect += "" + this.valorfiscal + ",";
        stringselect += "'" + this.marca + "',";
        stringselect += "'" + this.fabrica + "',";
        stringselect += "'" + this.modelo + "',";
        stringselect += "'" + this.patente + "',";
        stringselect += "" + this.ano + ",";
        stringselect += "'" + this.fechacompra + "',";
        stringselect += "" + this.porc_titular + ",";
        stringselect += "" + this.baja_en_periodo + ",";
        stringselect += "'" + this.id_archivo + "'";
        stringselect += " );";
        stringselect += "COMMIT;";
        return instantQuery(stringselect);
    }
    delete(id: string) {
        let stringselect = "";
        stringselect += "DELETE FROM relation_vehiculo_user where id_vehiculo=" + id + ";";
        return instantQuery(stringselect);
    }
    obtener_byUser(user: string) {
        let stringselect = "";
        stringselect += "SELECT ";
        stringselect += "v.* from usuarios u ";
        stringselect += "join relation_vehiculo_user r on u.id_usuario = r.id_usuario ";
        stringselect += "join present_vehiculos v on r.id_vehiculo = v.id_vehiculo  ";
        stringselect += "where usuario='" + user + "'";
        return instantQuery(stringselect);
    }
}

// module.exports = { Vehiculo };