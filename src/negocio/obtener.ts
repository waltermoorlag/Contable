// var Usuario = require('../clases/Usuario').Usuario;
// var Vehiculo = require('../clases/Vehiculo').Vehiculo;
import { instantQuery } from "./../negocio/connectdb";
import { Vehiculo } from "./../clases/Vehiculo";
// var instantQuery = require('./connectdb').instantQuery;
// var conn = require('./connectdb').obtenerConnect;

export const UsuarioByUser = function (req: any, res: any, next: any) {
  // var _usuario = new Usuario();
  //   _usuario.obtener_byUser(req.params.username).then(function(result){
  //     req._response = result;
  //     next();
  // });
};

export const VehiculosByUser = function (req: any, res: any, next: any) {
  const _vehiculo = new Vehiculo({});
  _vehiculo.obtener_byUser(req.params.username).then(function(result) {
    req.resultSQL = result;
    next();
});
};
export const InmueblesByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_inmueble_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_inmueble i on r.id_inmueble = i.id_inmueble  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
  // next();
};

export const EmbarcacionByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_embarcacion_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_embarcacion i on r.id_embarcacion = i.id_embarcacion  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const AeronaveByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_aeronave_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_aeronave i on r.id_aeronave = i.id_aeronave  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};

export const CuentasByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_cuentas_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_cuentas i on r.id_cuentas = i.id_cuenta  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const OtrosBienesByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_otrosbienes_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_otrosbienes i on r.id_otrosbienes = i.id_otrosbienes  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const Titulos_V_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_titulos_V_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_titulos_V i on r.id_titulos = i.id_titulos  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const Titulos_SinCot_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_titu_sincot_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_titu_sincot i on r.id_titulo = i.id_titulo  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const Titulos_ConCot_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_titu_concot_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_titu_concot i on r.id_titulo = i.id_titulo  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const Acciones_SinCot_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_acciones_sincot_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_acciones_sincot i on r.id_titulo = i.id_titulo  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const Dinero_Efectivo_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_dinero_efectivo_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_dinero_efectivo i on r.id_dinero = i.id_dinero  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const AccionesFondosObligNegociables_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_acc_fondos_oblneg_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_acc_fondos_oblneg i on r.id_titulo = i.id_titulo  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const TipoSociedad = function (req: any, res: any, next: any) {
  const tipoSocExcentas = [];
  tipoSocExcentas.push({ id: 1, descrip: "Asociación", excento: false });
  tipoSocExcentas.push({ id: 2, descrip: "Capital e Industria", excento: false });
  tipoSocExcentas.push({ id: 3, descrip: "Colectiva", excento: true });
  tipoSocExcentas.push({ id: 4, descrip: "Comandita por acciones", excento: true });
  tipoSocExcentas.push({ id: 5, descrip: "Comandita Simple", excento: true });
  tipoSocExcentas.push({ id: 6, descrip: "Con Participación estatal Mayoritaria", excento: true });
  tipoSocExcentas.push({ id: 7, descrip: "Consorcio de propietarios", excento: false });
  tipoSocExcentas.push({ id: 8, descrip: "Cooperativa", excento: true });
  tipoSocExcentas.push({ id: 9, descrip: "De hecho", excento: false });
  tipoSocExcentas.push({ id: 10, descrip: "Dirección administrativa estatal", excento: false });
  tipoSocExcentas.push({ id: 11, descrip: "Economía Estatal", excento: true });
  tipoSocExcentas.push({ id: 12, descrip: "Economía mixta", excento: false });
  tipoSocExcentas.push({ id: 13, descrip: "Empresa del estado", excento: false });
  tipoSocExcentas.push({ id: 14, descrip: "Fideicomiso", excento: false });
  tipoSocExcentas.push({ id: 15, descrip: "Fundación", excento: true });
  tipoSocExcentas.push({ id: 16, descrip: "Garantías reciprocas", excento: false });
  tipoSocExcentas.push({ id: 17, descrip: "Organismo Público", excento: false });
  tipoSocExcentas.push({ id: 18, descrip: "Otros", excento: false });
  tipoSocExcentas.push({ id: 19, descrip: "Responsabilidad Limitada", excento: true });
  tipoSocExcentas.push({ id: 20, descrip: "Sociedad Anónima", excento: true });
  tipoSocExcentas.push({ id: 21, descrip: "Sociedad Anonima simplificada", excento: false });
  tipoSocExcentas.push({ id: 22, descrip: "Sociedad en formación", excento: false });
  tipoSocExcentas.push({ id: 23, descrip: "Sucursal de Empresa extranjera", excento: false });
  tipoSocExcentas.push({ id: 24, descrip: "Unión transitoría de Empresas - UTE", excento: true });
  req.TipoSocExcentas = tipoSocExcentas;
  next();
};
export const InmueblesDelExterior_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_inmuebles_exterior_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_inmuebles_exterior i on r.id_inmueble = i.id_inmueble  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const VehiculosDelExterior_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_vehiculos_exterior_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_vehiculos_exterior i on r.id_vehiculo = i.id_vehiculo  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const DepositosDelExterior_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_depositos_exterior_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_depositos_exterior i on r.id_deposito = i.id_deposito  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const BienesDelExterior_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_bienes_exterior_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_bienes_exterior i on r.id_bien = i.id_bien  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const ParticipacionesSocietariasDelExterior_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_part_societarias_exterior_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_part_societarias_exterior i on r.id_registro = i.id_registro  ";
  stringselect += "where usuario='" + req.params.username + "'";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const CompraVentaMoneda_ByUser = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "SELECT ";
  stringselect += "i.* from usuarios u ";
  stringselect += "join relation_compraventa_moneda_user r on u.id_usuario = r.id_usuario ";
  stringselect += "join present_compraventa_moneda i on r.id_registro = i.id_registro  ";
  stringselect += "where usuario='" + req.params.username + "' order by fecha";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};
export const TipoCambio = function (req: any, res: any, next: any) {
  let stringselect = "";
  console.log(req.params);
  stringselect += "SELECT * FROM tipo_cambio where fecha='" + req.params.fecha + "' and moneda='" + req.params.moneda + "';";
  instantQuery(stringselect).then(function(result) {
    req.resultSQL = result;
    // req._response = result;
    req.senteSQL = stringselect;
    next();
  });
};