// var Usuario = require('../clases/Usuario').Usuario;
// var Vehiculo = require('../clases/Vehiculo').Vehiculo;
import { Vehiculo } from "./../clases/Vehiculo";
// import { Usuario } from "./../clases/Usuario";

export const newUsuario = function (req: any, res: any, next: any) {
  const newUser = req.body;
  // const _usuario = new Usuario(newUser.usuario,
  //   newUser.nombre,
  //   newUser.correo);
  // _usuario.insert().then(function(){
  //   next();
  // });
};

export const newVehiculo = function (req: any, res: any, next: any) {
  const newvehiculo = {usuario: req.body.user,
    tipo: req.body.f.tipoVehiculo,
    valorcompra: req.body.f.valorCompraVehiculo,
    valorfiscal: req.body.f.valorFiscalVehiculo,
    marca: req.body.f.vehiMarca,
    fabrica: req.body.f.vehiFabrica,
    modelo: req.body.f.vehiModelo,
    patente: req.body.f.vehiPatente,
    ano: req.body.f.vehiAno,
    fechacompra: req.body.f.fechaCompraVehiculo,
    porc_titular: req.body.f.vehiTit,
    baja_en_periodo: req.body.f.vehiBaja,
    id_archivo: req.body.f.id_archivo
  };
  const _vehiculo = new Vehiculo(newvehiculo);
  if (_vehiculo.insert()) {
    next();
  }
};


export const Inmueble = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_inmueble_user(id_inmueble,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_inmueble(";
  stringselect += "  circunsinmueble, baja_en_periodo, codigopostal, ";
  stringselect += "  creditohipo, destinoinmueble, direcciondepto, direccioninmueble, ";
  stringselect += "  direccionnumero, direccionpiso, fechacompra, manzanainmueble, ";
  stringselect += "  parcelainmueble, partidainmueble, preciocompra, provinciainmueble,";
  stringselect += "  seccioninmueble, supcub, supdesc, supsemi, suptotal, tipoinmueble, ";
  stringselect += "  tipomoneda, porc_titular, valorfiscal, id_archivo )";
  stringselect += " VALUES ( ";

  stringselect += "'" + req.body.f.CircunsInmueble + "',";
  stringselect += "" + req.body.f.baja + ",";
  stringselect += "" + (req.body.f.codigoPostal || 0) + ",";
  stringselect += "'" + req.body.f.creditoHipo + "',";
  stringselect += "'" + req.body.f.destinoInmueble + "',";
  stringselect += "'" + req.body.f.direccionDepto + "',";
  stringselect += "'" + req.body.f.direccionInmueble + "',";
  stringselect += "" + (req.body.f.direccionNumero || 0) + ",";
  stringselect += "" + (req.body.f.direccionPiso || 0) + ",";
  stringselect += "'" + req.body.f.fechaCompra + "',";
  stringselect += "'" + req.body.f.manzanaInmueble + "',";
  stringselect += "'" + req.body.f.parcelaInmueble + "',";
  stringselect += "'" + req.body.f.partidaInmueble + "',";
  stringselect += "" + (req.body.f.precioCompra || 0) + ",";
  stringselect += "'" + req.body.f.provinciaInmueble + "',";
  stringselect += "'" + req.body.f.seccionInmueble + "',";
  stringselect += "" + (req.body.f.supCub || 0) + ",";
  stringselect += "" + (req.body.f.supDesc || 0) + ",";
  stringselect += "" + (req.body.f.supSemi || 0) + ",";
  stringselect += "" + (req.body.f.supTotal || 0) + ",";
  stringselect += "'" + req.body.f.tipoInmueble + "',";
  stringselect += "'" + req.body.f.tipoMoneda + "',";
  stringselect += "" + (req.body.f.titPorc || 0) + ",";
  stringselect += "" + (req.body.f.valorFiscal || 0) + ",";
  stringselect += "'" + (req.body.f.id_archivo || "") + "'";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  console.log(stringselect);
  next();

};


export const Embarcacion = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_embarcacion_user(id_embarcacion,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_embarcacion(";

  stringselect += " baja_en_periodo, cantmotores, porc_titular, eslora,  ";
  stringselect += " fechacompra, nombre, manga, marcamotor, matricula, modelomotor,  ";
  stringselect += " numeromotor, origen, potenciamotor, registro, tipo, tonelaje,  ";
  stringselect += " valorcompra )";

  stringselect += " VALUES ( ";
  stringselect += "" + req.body.f.bajaEmbarcacion + ",";
  stringselect += "" + (req.body.f.cantMotoresEmbarcacion || 0) + ",";
  stringselect += "" + (req.body.f.embaTit || 0) + ",";
  stringselect += "" + (req.body.f.esloraEmbarcacion || 0) + ",";
  stringselect += "'" + req.body.f.fechaCompraEmbarcacion + "',";
  stringselect += "'" + req.body.f.inputNombreEmbarcacion + "',";
  stringselect += "" + (req.body.f.mangaEmbarcacion || 0) + ",";
  stringselect += "'" + req.body.f.marcaMotorEmbarcacion + "',";
  stringselect += "'" + req.body.f.matriculaEmbarcacion + "',";
  stringselect += "'" + req.body.f.modeloMotorEmbarcacion + "',";
  stringselect += "'" + req.body.f.numeroMotorEmbarcacion + "',";
  stringselect += "'" + req.body.f.origenEmbarcacion + "',";
  stringselect += "" + (req.body.f.potenciaMotorEmbarcacion || 0) + ",";
  stringselect += "'" + req.body.f.registroEmbarcacion + "',";
  stringselect += "'" + req.body.f.tipoEmbarcacion + "',";
  stringselect += "" + (req.body.f.tonelajeEmbarcacion || 0) + ",";
  stringselect += "" + (req.body.f.valorCompraEmbarcacion || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();
};


export const Aeronave = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_aeronave_user(id_aeronave,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_aeronave(";

  stringselect += " ano, matricula, modelo, baja_en_periodo, porc_titular,  ";
  stringselect += " fechacompra, marca, valor ";
  stringselect += ") VALUES ( ";
  // console.log("Body:",req.body);
  stringselect += "" + (req.body.f.aeroAno || 0) + ",";
  stringselect += "'" + req.body.f.aeroMatricula + "',";
  stringselect += "'" + req.body.f.aeroModelo + "',";
  stringselect += "" + req.body.f.bajaAero + ",";
  stringselect += "" + (req.body.f.aeroTit || 0) + ",";
  stringselect += "'" + req.body.f.fechaCompraAeronave + "',";
  stringselect += "'" + req.body.f.marcaAeronave + "',";
  stringselect += "" + (req.body.f.valorAero || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const Cuenta = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_cuentas_user(id_cuentas,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_cuentas(";

  stringselect += " baja_en_periodo, cantidadnominal, moneda, nombrebanco, ";
  stringselect += " numerocbu, numerocta, sucursalbanco, tipocuenta, totalpesos ";
  stringselect += ") VALUES ( ";
  stringselect += "" + req.body.f.bajaCta + ",";
  stringselect += "" + (req.body.f.cantidadNominal || 0) + ",";
  stringselect += "'" + req.body.f.monedaCta + "',";
  stringselect += "'" + req.body.f.nombreBanco + "',";
  stringselect += "'" + req.body.f.numeroCbu + "',";
  stringselect += "'" + req.body.f.numeroCta + "',";
  stringselect += "'" + req.body.f.sucursalBanco + "',";
  stringselect += "'" + req.body.f.tipoCuenta + "',";
  stringselect += "" + (req.body.f.totalPesos || 0) + "";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const OtrosBienes = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_otrosbienes_user(id_otrosbienes,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_otrosbienes(";


  stringselect += " baja_en_periodo, fechacompra, valorcompra , detalle, titular ";
  stringselect += ") VALUES ( ";
  stringselect += "" + req.body.f.bajaOtrosBienes + ",";
  stringselect += "'" + req.body.f.fechacompra + "',";
  stringselect += "" + (req.body.f.valorcompra || 0) + ",";
  stringselect += "'" + req.body.f.detalle + "',";
  stringselect += "" + (req.body.f.otrosBienesTit || 0) + "";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};


export const Titulos_V = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_titulos_V_user(id_titulos,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_titulos_V(";
  stringselect += "bajaTit,";
  stringselect += "bajaTitSinCot,";
  stringselect += "cantidadTit,";
  stringselect += "codigoTit,";
  stringselect += "denominacion,";
  stringselect += "fechaCompra,";
  stringselect += "tipoTit,";
  stringselect += "valorTotTit,";
  stringselect += "valorUniTit";
  stringselect += ") VALUES ( ";

  stringselect += "" + req.body.f.bajaTit + ",";
  stringselect += "" + req.body.f.bajaTitSinCot + ",";
  stringselect += "" + (req.body.f.cantidadTit || 0) + ",";
  stringselect += "'" + req.body.f.codigoTit + "',";
  stringselect += "'" + req.body.f.denominacion + "',";
  stringselect += "'" + req.body.f.fechaCompra + "',";
  stringselect += "'" + req.body.f.tipoTit + "',";
  stringselect += "" + (req.body.f.valorTotTit || 0) + ",";
  stringselect += "" + (req.body.f.valorUniTit || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};


export const TituloSinCot = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_titu_sincot_user(id_titulo,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_titu_sincot(";
  stringselect += " archivo,baja, cantidad, codigo, denominacion, fechacompra, tipo, valortot, valoruni )";
  stringselect += " VALUES ( ";
  stringselect += "'" + req.body.f.archivo + "',";
  stringselect += "" + req.body.f.bajaTitSinCot + ",";
  stringselect += "" + (req.body.f.cantidadTit || 0) + ",";
  stringselect += "'" + req.body.f.codigoTit + "',";
  stringselect += "'" + req.body.f.denominacion + "',";
  stringselect += "'" + req.body.f.fechaCompra + "',";
  stringselect += "'" + req.body.f.tipoTit + "',";
  stringselect += "" + (req.body.f.valorTotTit || 0) + ",";
  stringselect += "" + (req.body.f.valorUniTit || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const TituloConCot = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_titu_concot_user(id_titulo,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_titu_concot(";
  stringselect += " archivo, baja, cantidad, codigo, fecha_adquisicion, tipo, importetotal, valor31, valorcompra )";
  stringselect += " VALUES ( ";

  stringselect += "'" + req.body.f.archivo + "',";
  stringselect += "" + req.body.f.baja + ",";
  stringselect += "" + (req.body.f.cantTit || 0) + ",";
  stringselect += "'" + req.body.f.codigoTit + "',";
  stringselect += "'" + req.body.f.fechaAdquisicion + "',";
  stringselect += "'" + req.body.f.tipo + "',";
  stringselect += "" + (req.body.f.importeTotal || 0) + ",";
  stringselect += "" + (req.body.f.valor31 || 0) + ",";
  stringselect += "" + (req.body.f.valorCompra || 0) + ",";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const AccionesSinCot = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_acciones_sincot_user(id_titulo,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_acciones_sincot(";
  stringselect += " archivo,art69,baja,cantidad,cantcuotas,cuit,fecha_adquisicion,porc_participacion,tipo,valor_patrimonial )";
  stringselect += " VALUES ( ";

  stringselect += "'" + req.body.f.archivo + "',";
  stringselect += "" + req.body.f.art69 + ",";
  stringselect += "" + req.body.f.baja + ",";
  stringselect += "" + (req.body.f.cantAcc || 0) + ",";
  stringselect += "" + (req.body.f.cantCuotas || 0) + ",";
  stringselect += "'" + req.body.f.cuit + "',";
  stringselect += "'" + req.body.f.fechaAdquisicion + "',";
  stringselect += "" + (req.body.f.porcParticipacion || 0) + ",";
  stringselect += "'" + req.body.f.tipo + "',";
  stringselect += "" + (req.body.f.valorPatrimonial || 0) + "";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const DineroEfectivo = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_dinero_efectivo_user(id_dinero,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_dinero_efectivo(";
  stringselect += " archivo,cantidad,tipo_moneda,tasa,moneda_otros,tasa_otros,total_moneda )";
  stringselect += " VALUES ( ";
  stringselect += "'" + req.body.f.archivo + "',";
  stringselect += "" + (req.body.f.cantidad || 0) + ",";
  stringselect += "'" + req.body.f.tipoMoneda + "',";
  stringselect += "" + (req.body.f.tasa || 0) + ",";
  stringselect += "'" + req.body.f.monedaOtros + "',";
  stringselect += "" + (req.body.f.tasaOtros || 0) + ",";
  stringselect += "" + (req.body.f.totalmoneda || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const AccionesFondosObligNegociables = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_acc_fondos_oblneg_user(id_titulo,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_acc_fondos_oblneg(";

  stringselect += " archivo,denominacion, baja, cantidades, cuit, fecha_adquisicion, tipo, tipo_fondo, total,  valor31 )";
  stringselect += " VALUES ( ";
  stringselect += "'" + req.body.f.archivo + "',";
  stringselect += "'" + req.body.f.Denominacion + "',";
  stringselect += "" + req.body.f.baja + ",";
  stringselect += "" + (req.body.f.cantidades || 0) + ",";
  stringselect += "'" + req.body.f.cuit + "',";
  stringselect += "'" + req.body.f.fechaAdquisicion + "',";
  stringselect += "'" + req.body.f.tipo + "',";
  stringselect += "'" + req.body.f.tipoFondo + "',";
  stringselect += "" + (req.body.f.total || 0) + ",";
  stringselect += "" + (req.body.f.valor31 || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};


export const InmuebleDelExterior = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_inmuebles_exterior_user(id_inmueble,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_inmuebles_exterior(";


  stringselect += " id_archivo,pais,baja,cambio_compra,ciudad,destino_inmueble,fecha_compra,precio_compra,provincia,tipo_inmueble,";
  stringselect += " tipo_moneda,tit_porc,ubicacion,valor_pesos,valor_plaza,valor_en_plaza";
  stringselect += ") VALUES ( ";

  stringselect += "'" + req.body.f.id_archivo + "',";
  stringselect += "'" + req.body.f.pais + "',";
  stringselect += "" + req.body.f.baja + ",";
  stringselect += "" + (req.body.f.cambioCompra || 0) + ",";
  stringselect += "'" + req.body.f.ciudad + "',";
  stringselect += "'" + req.body.f.destinoInmueble + "',";
  stringselect += "'" + req.body.f.fechaCompra + "',";
  stringselect += "" + (req.body.f.precioCompra || 0) + ",";
  stringselect += "'" + req.body.f.provincia + "',";
  stringselect += "'" + req.body.f.tipoInmueble + "',";
  stringselect += "'" + req.body.f.tipoMoneda + "',";
  stringselect += "" + (req.body.f.titPorc || 0) + ",";
  stringselect += "'" + req.body.f.ubicacion + "',";
  stringselect += "" + (req.body.f.valorPesos || 0) + ",";
  stringselect += "" + (req.body.f.valorPlaza || 0) + ",";
  stringselect += "" + (req.body.f.valorenPlaza || 0) + "";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const VehiculoDelExterior = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_vehiculos_exterior_user(id_vehiculo,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_vehiculos_exterior(";

  stringselect += " id_archivo,cambio_compra,detalle,fecha_compra,fecha_fabricacion,matricula,pais,";
  stringselect += " precio_compra,tipo_moneda,tipo_vehiculo,valor_compra,valor_pesos,valor_plaza,";
  stringselect += " valoren_plaza,vehi_baja,vehi_marca,vehi_modelo,vehi_tit";
  stringselect += ") VALUES ( ";
  stringselect += "'" + req.body.f.id_archivo + "',";
  stringselect += "" + (req.body.f.cambioCompra || 0) + ",";
  stringselect += "'" + req.body.f.detalle + "',";
  stringselect += "'" + req.body.f.fechaCompra + "',";
  stringselect += "'" + req.body.f.fechaFabricacion + "',";
  stringselect += "'" + req.body.f.matricula + "',";
  stringselect += "'" + req.body.f.pais + "',";
  stringselect += "" + (req.body.f.precioCompra || 0) + ",";
  stringselect += "'" + req.body.f.tipoMoneda + "',";
  stringselect += "'" + req.body.f.tipoVehiculo + "',";
  stringselect += "" + (req.body.f.valorCompra || 0) + ",";
  stringselect += "" + (req.body.f.valorPesos || 0) + ",";
  stringselect += "" + (req.body.f.valorPlaza || 0) + ",";
  stringselect += "" + (req.body.f.valorenPlaza || 0) + ",";
  stringselect += "" + req.body.f.vehiBaja + ",";
  stringselect += "'" + req.body.f.vehiMarca + "',";
  stringselect += "'" + req.body.f.vehiModelo + "',";
  stringselect += "" + (req.body.f.vehiTit || 0) + "";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const DepositoDelExterior = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_depositos_exterior_user(id_deposito,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_depositos_exterior(";

  stringselect += "id_archivo,pais,baja_cta,cantidad_nominal,moneda_cta,nombre_banco,";
  stringselect += "numero_cta,sucursal_banco,tasa_cambio,tipo_cuenta,total_pesos";

  stringselect += ") VALUES ( ";

  stringselect += "'" + req.body.f.id_archivo + "',";
  stringselect += "'" + req.body.f.Pais + "',";
  stringselect += "" + req.body.f.bajaCta + ",";
  stringselect += "" + (req.body.f.cantidadNominal || 0) + ",";
  stringselect += "'" + req.body.f.monedaCta + "',";
  stringselect += "'" + req.body.f.nombreBanco + "',";
  stringselect += "'" + req.body.f.numeroCta + "',";
  stringselect += "" + (req.body.f.sucursalBanco || 0) + ",";
  stringselect += "" + (req.body.f.tasacambio || 0) + ",";
  stringselect += "'" + req.body.f.tipoCuenta + "',";
  stringselect += "" + (req.body.f.totalPesos || 0) + "";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};


export const BienDelExterior = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_bienes_exterior_user(id_bien,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_bienes_exterior(";

  stringselect += "id_archivos,pais,baja_cta,detalle,fecha,importe_nominal,moneda_cta,tasa_cambio,total_pesos";

  stringselect += ") VALUES ( ";

  stringselect += "'" + req.body.f.id_archivos + "',";
  stringselect += "'" + req.body.f.Pais + "',";
  stringselect += "" + req.body.f.bajaCta + ",";
  stringselect += "'" + req.body.f.detalle + "',";
  stringselect += "'" + req.body.f.fecha + "',";
  stringselect += "" + (req.body.f.importeNominal || 0) + ",";
  stringselect += "'" + req.body.f.monedaCta + "',";
  stringselect += "" + (req.body.f.tasacambio || 0) + ",";
  stringselect += "" + (req.body.f.totalPesos || 0) + "";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const ParticipacionesSocietariasDelExterior = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_part_societarias_exterior_user(id_registro,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_part_societarias_exterior(";
  stringselect += "id_archivo,pais,baja_cta,domicilio,fecha_compra,importe,participacion,razon_social";
  stringselect += ") VALUES ( ";

  stringselect += "'" + req.body.f.id_archivo + "',";
  stringselect += "'" + req.body.f.Pais + "',";
  stringselect += "" + req.body.f.bajaCta + ",";
  stringselect += "'" + req.body.f.domicilio + "',";
  stringselect += "'" + req.body.f.fechaCompra + "',";
  stringselect += "" + (req.body.f.importe || 0) + ",";
  stringselect += "" + (req.body.f.participacion || 0) + ",";
  stringselect += "'" + req.body.f.razonSocial + "'";

  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};

export const CompraVentaMoneda = function (req: any, res: any, next: any) {
  let stringselect = "";
  stringselect += "BEGIN;";
  stringselect += "INSERT INTO relation_compraventa_moneda_user(id_registro,id_usuario) select -1,id_usuario from usuarios where usuario='" + req.body.user + "';";
  stringselect += "INSERT INTO present_compraventa_moneda(";
  stringselect += "fecha,ingoegr,moneda,importe,tasa,descrip";
  stringselect += ") VALUES ( ";
  stringselect += "'" + req.body.f.fecha + "',";
  stringselect += "'" + req.body.f.ingoegr + "',";
  stringselect += "'" + req.body.f.moneda + "',";
  stringselect += "" + (req.body.f.importe || 0) + ",";
  stringselect += "" + (req.body.f.tasa || 0) + ",";
  stringselect += "'" + (req.body.f.descrip || "") + "'";
  stringselect += "); ";
  stringselect += "COMMIT;";
  req.senteSQL = stringselect;
  next();

};


export const TipoCambio = function (req: any, res: any, next: any) {
  let stringselect = "";
  // console.log(req.body);
  stringselect += "insert into tipo_cambio(fecha,moneda,cotizacion) values (";
  stringselect += "'" + req.body.f.fecha + "',";
  stringselect += "'" + req.body.f.moneda + "',";
  stringselect += "" + (req.body.f.cotizacion || 0) + "";
  stringselect += "); ";
  req.senteSQL = stringselect;
  next();
};