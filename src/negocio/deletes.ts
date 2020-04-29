import { Response, Request, NextFunction } from "express";
export let VehiculosById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_vehiculo_user where id_vehiculo=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  InmueblesById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_inmueble_user where id_inmueble=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};
export let  EmbarcacionId = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_embarcacion_user where id_embarcacion=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};
export let  AeronaveId = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_aeronave_user where id_aeronave=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  CuentasId = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_cuentas_user where id_cuentas=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};


export let  OtrosBienesId = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_otrosbienes_user where id_otrosbienes=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  Titulos_VById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_titulos_V_user where id_titulos=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};


export let  Titulos_SinCot_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_titu_sincot_user where id_titulo=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  Titulos_ConCot_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_titu_concot_user where id_titulo=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  Acciones_SinCot_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_acciones_sincot_user where id_titulo=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  Dinero_Efectivo_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_dinero_efectivo_user where id_dinero=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  AccionesFondosObligNegociables_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_acc_fondos_oblneg_user where id_titulo=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  InmuebleDelExterior_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_inmuebles_exterior_user where id_inmueble=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  VehiculoDelExterior_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_vehiculos_exterior_user where id_vehiculo=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  DepositoDelExterior_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_depositos_exterior_user where id_deposito=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  BienDelExterior_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_bienes_exterior_user where id_bien=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  ParticipacionSocietariaDelExterior_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_part_societarias_exterior_user where id_registro=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};

export let  CompraVentaMoneda_ById = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM relation_compraventa_moneda_user where id_registro=" + req.params.id + ";";
    req.senteSQL = stringselect;
    next();
};


export let  TipoCambio = function (req: any, res: Response, next: NextFunction) {
    let stringselect = "";
    stringselect += "DELETE FROM tipo_cambio where fecha='" + req.params.fecha + "' and moneda='" + req.params.moneda + "';";
    req.senteSQL = stringselect;
    next();
};


// module.exports = {
//     TipoCambio,
//     InmueblesById,
//     VehiculosById,
//     EmbarcacionId,
//     AeronaveId,
//     CuentasId,
//     OtrosBienesId,
//     Titulos_VById,
//     Titulos_SinCot_ById,
//     Titulos_ConCot_ById,
//     Acciones_SinCot_ById,
//     Dinero_Efectivo_ById,
//     AccionesFondosObligNegociables_ById,
//     InmuebleDelExterior_ById,
//     VehiculoDelExterior_ById,
//     DepositoDelExterior_ById,
//     BienDelExterior_ById,
//     ParticipacionSocietariaDelExterior_ById,
//     CompraVentaMoneda_ById
// }
