const express = require("express");
const router = express.Router();

// import * as passportConfig from "./../config/passport";

import * as UploadFiles from "./../negocio/uploadFile";
import * as connect from "./../negocio/connectdb";
import * as Delete from "./../negocio/deletes";
import * as Insert from "./../negocio/inserts";
import * as Obtener from "./../negocio/obtener";
import * as Calculo from "./../negocio/calculos";

const Bienes = {
  Delete,
  Insert,
  Obtener,
  Calculo
};

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


router.get("/available_links", function (req: any, res: any) {
  const links = [
    "COMPRA Y VENTA MONEDA",
    {
      URL: "post('/agregarCompraVentaMoneda')",
      body: {
        fecha: "",
        ingoegr: "E = Ventas /I = Compras",
        moneda: "",
        importe: 0,
        tasa: 0,
        descrip: "(Palabra clave Compra)"
      }
    },
    "delete('/quitarCompraVentaMoneda/:id')",
    "get('/obtenerCompraVentaMoneda/:username')",
    "get('/calcularCompraVenta/:username')  ",
    "",
    "",
    "TIPO DE CAMBIO",
    "get('/obtenerTipoDeCambio/:fecha(YYYY-MM-DD)/:moneda')",
    "delete('/quitarTipoDeCambio/:fecha(YYYY-MM-DD)/:moneda')",
    {
      URL: "post('/agregarTipoDeCambio')",
      body: {
        fecha: "YYYY-MM-DD",
        moneda: "",
        cotizacion: 0
      }
    },
    "",
    "CALCULO DE IMPUESTO",
    "get('/obtenerImpuestos/:username')",
    "",
    "METODO DE AYUDAS",
    "get('/obtenerTipoSociedad')",
    "",
    "METODOS DE OBTENER DATOS",
    "get('/obtenerVehiculos/:username')",
    "get('/obtenerInmuebles/:username')",
    "get('/obtenerEmbarcaciones/:username')",
    "get('/obtenerAeronaves/:username')",
    "get('/obtenerCuentas/:username')",
    "get('/obtenerOtrosBienes/:username')",
    "get('/obtenerTitulos/:username')",
    "get('/obtenerTitulosSinCot/:username')",
    "get('/obtenerTitulosConCot/:username')",
    "get('/obtenerAccionesSinCot/:username')",
    "get('/obtenerDineroEfectivo/:username')",
    "get('/obtenerAccFondosOblNeg/:username')",
    "get('/obtenerInmueblesDelExterior/:username')",
    "get('/obtenerVehiculosDelExterior/:username')",
    "get('/obtenerDepositosDelExterior/:username')",
    "get('/obtenerBienesDelExterior/:username')",
    "get('/obtenerParticipacionesDelExterior/:username')",
    "",
    "METODOS DE AGREGAR",
    {
      URL: "post('/agregarVehiculo')",
      body: {
        tipoVehiculo: "",
        valorCompraVehiculo: 0,
        valorFiscalVehiculo: 0,
        vehiMarca: "",
        vehiFabrica: "",
        vehiModelo: "",
        vehiPatente: "",
        vehiAno: 0,
        fechaCompraVehiculo: "",
        vehiTit: 0,
        vehiBaja: false,
        id_archivo: ""
      }
    },
    {
      URL: "post('/agregarInmueble')",
      body: {
        CircunsInmueble: "",
        baja: false,
        codigoPostal: 0,
        creditoHipo: "",
        destinoInmueble: "",
        direccionDepto: "",
        direccionInmueble: "",
        direccionNumero: 0,
        direccionPiso: 0,
        fechaCompra: "",
        manzanaInmueble: "",
        parcelaInmueble: "",
        partidaInmueble: "",
        precioCompra: 0,
        provinciaInmueble: "",
        seccionInmueble: "",
        supCub: 0,
        supDesc: 0,
        supSemi: 0,
        supTotal: 0,
        tipoInmueble: "",
        tipoMoneda: "",
        titPorc: 0,
        valorFiscal: 0,
        id_archivo: ""
      }
    },
    {
      URL: "post('/agregarEmbarcacion')",
      body: {
        bajaEmbarcacion: false,
        cantMotoresEmbarcacion: 0,
        embaTit: 0,
        esloraEmbarcacion: 0,
        fechaCompraEmbarcacion: "",
        inputNombreEmbarcacion: "",
        mangaEmbarcacion: 0,
        marcaMotorEmbarcacion: "",
        matriculaEmbarcacion: "",
        modeloMotorEmbarcacion: "",
        numeroMotorEmbarcacion: "",
        origenEmbarcacion: "",
        potenciaMotorEmbarcacion: 0,
        registroEmbarcacion: "",
        tipoEmbarcacion: "",
        tonelajeEmbarcacion: 0,
        valorCompraEmbarcacion: 0
      }
    },
    {
      URL: "post('/agregarAeronave')",
      body: {
        aeroAno: 0,
        aeroMatricula: "",
        aeroModelo: "",
        bajaAero: false,
        aeroTit: 0,
        fechaCompraAeronave: "",
        marcaAeronave: "",
        valorAero: 0
      }
    },
    {
      URL: "post('/agregarCuenta')",
      body: {
        bajaCta: false,
        cantidadNominal: 0,
        monedaCta: "",
        nombreBanco: "",
        numeroCbu: "",
        numeroCta: "",
        sucursalBanco: "",
        tipoCuenta: "",
        totalPesos: 0
      }
    },
    {
      URL: "post('/agregarOtrosBienes')",
      body: {
        bajaOtrosBienes: false,
        fechacompra: "",
        valorcompra: 0,
        detalle: "",
        otrosBienesTit: 0
      }
    },
    {
      URL: "post('/agregarTituloSinCot')",
      body: {
        archivo: "",
        bajaTitSinCot: false,
        cantidadTit: 0,
        codigoTit: "",
        denominacion: "",
        fechaCompra: "",
        tipoTit: "",
        valorTotTit: 0,
        valorUniTit: 0
      }
    },
    {
      URL: "post('/agregarTituloConCot')",
      body: {
        archivo: "",
        baja: false,
        cantTit: 0,
        codigoTit: "",
        fechaAdquisicion: "",
        tipo: "",
        importeTotal: 0,
        valor31: 0,
        valorCompra: 0
      }
    },
    {
      URL: "post('/agregarAccionesSinCot')",
      body: {
        archivo: "",
        art69: false,
        baja: false,
        cantAcc: 0,
        cantCuotas: 0,
        cuit: "",
        fechaAdquisicion: "",
        porcParticipacion: 0,
        tipo: "",
        valorPatrimonial: 0
      }
    },
    {
      URL: "post('/agregarDineroEfectivo')",
      body: {
        archivo: "",
        cantidad: 0,
        tipoMoneda: "",
        tasa: 0,
        monedaOtros: "",
        tasaOtros: 0,
        totalmoneda: 0
      }
    },
    {
      URL: "post('/agregarAccFondosOblNeg')",
      body: {
        archivo: "",
        Denominacion: "",
        baja: false,
        cantidades: 0,
        cuit: "",
        fechaAdquisicion: "",
        tipo: "",
        tipoFondo: "",
        total: 0,
        valor31: 0
      }
    },
    {
      URL: "post('/agregarInmuebleDelExterior')",
      body: {
        id_archivo: "",
        pais: "",
        baja: false,
        cambioCompra: 0,
        ciudad: "",
        destinoInmueble: "",
        fechaCompra: "",
        precioCompra: 0,
        provincia: "",
        tipoInmueble: "",
        tipoMoneda: "",
        titPorc: 0,
        ubicacion: "",
        valorPesos: 0,
        valorPlaza: 0,
        valorenPlaza: 0
      }
    },
    {
      URL: "post('/agregarVehiculoDelExterior')",
      body: {
        id_archivo: "",
        cambioCompra: 0,
        detalle: "",
        fechaCompra: "",
        fechaFabricacion: "",
        matricula: "",
        pais: "",
        precioCompra: 0,
        tipoMoneda: "",
        tipoVehiculo: "",
        valorCompra: 0,
        valorPesos: 0,
        valorPlaza: 0,
        valorenPlaza: 0,
        vehiBaja: false,
        vehiMarca: "",
        vehiModelo: "",
        vehiTit: 0
      }
    },
    {
      URL: "post('/agregarDepositoDelExterior')",
      body: {
        id_archivo: "",
        Pais: "",
        bajaCta: false,
        cantidadNominal: 0,
        monedaCta: "",
        nombreBanco: "",
        numeroCta: "",
        sucursalBanco: 0,
        tasacambio: 0,
        tipoCuenta: "",
        totalPesos: 0
      }
    },
    {
      URL: "post('/agregarBienDelExterior')",
      body: {
        id_archivos: "",
        Pais: "",
        bajaCta: false,
        detalle: "",
        fecha: "",
        importeNominal: 0,
        monedaCta: "",
        tasacambio: 0,
        totalPesos: 0
      }
    },
    {
      URL: "post('/agregarParticipacionDelExterior')",
      body: {
        id_archivo: "",
        Pais: "",
        bajaCta: false,
        domicilio: "",
        fechaCompra: "",
        importe: 0,
        participacion: 0,
        razonSocial: ""
      }
    },
    "",
    "METODOS DE QUITAR",
    "delete('/quitarVehiculo/:id')",
    "delete('/quitarInmuebles/:id)",
    "delete('/quitarEmbarcacion/:id)",
    "delete('/quitarAeronave/:id')",
    "delete('/quitarCuenta/:id')",
    "delete('/quitarOtrosBienes/:id)",
    "delete('/quitarTitulos/:id')",
    "delete('/quitarTituloSinCot/:id')",
    "delete('/quitarTituloConCot/:id')",
    "delete('/quitarAccionesSinCot/:id')",
    "delete('/quitarDineroEfectivo/:id')",
    "delete('/quitarAccFondosOblNeg/:id')",
    "delete('/quitarInmuebleDelExterior/:id')",
    "delete('/quitarVehiculoDelExterior/:id')",
    "delete('/quitarDepositoDelExterior/:id')",
    "delete('/quitarBienDelExterior/:id')",
    "delete('/quitarParticipacionDelExterior/:id')",
    "",

    "",
    "UPLOAD FILES",
    "post('/upload/:username')"
  ];
  res.send(links);
});

router.get("/obtenerUsuario/:username",  Bienes.Obtener.UsuarioByUser, function (req: any, res: any) {
  res.send(req._response);
});



////////    UpLoad File   ////////
const fileUpload = require("express-fileupload");
router.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
router.post("/upload/:username",  UploadFiles.uploadMedia, function (req: any, res: any) {
  res.send(req.filename);
});
//////////////////////////////////

//////  TIPO DE CAMBIO   /////////
router.get("/obtenerTipoDeCambio/:fecha/:moneda",  Bienes.Obtener.TipoCambio, connect.__sql, connect.responderResult);
router.post("/agregarTipoDeCambio",  Bienes.Insert.TipoCambio, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarTipoDeCambio/:fecha/:moneda",  Bienes.Delete.TipoCambio, connect.__sql, connect.responderResult);
///////////////////////////////////
router.get("/obtenerTipoSociedad",  Bienes.Obtener.TipoSociedad, function (req: any, res: any) { res.send(req.TipoSocExcentas); });
//
//
// router.get('/obtenerVehiculos/:username', Bienes.Obtener.VehiculosByUser, connect.__sql, connect.responderResult);
router.get("/obtenerVehiculos/:username",  Bienes.Obtener.VehiculosByUser, function (req: any, res: any) {
  res.send(req.resultSQL);
});


router.get("/obtenerInmuebles/:username",  Bienes.Obtener.InmueblesByUser, connect.__sql, connect.responderResult);

router.get("/obtenerEmbarcaciones/:username",  Bienes.Obtener.EmbarcacionByUser, connect.__sql, connect.responderResult);

router.get("/obtenerAeronaves/:username",  Bienes.Obtener.AeronaveByUser, connect.__sql, connect.responderResult);

router.get("/obtenerCuentas/:username",  Bienes.Obtener.CuentasByUser, connect.__sql, connect.responderResult);

router.get("/obtenerOtrosBienes/:username",  Bienes.Obtener.OtrosBienesByUser, connect.__sql, connect.responderResult);

router.get("/obtenerTitulos/:username",  Bienes.Obtener.Titulos_V_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerTitulosSinCot/:username",  Bienes.Obtener.Titulos_SinCot_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerTitulosConCot/:username",  Bienes.Obtener.Titulos_ConCot_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerAccionesSinCot/:username",  Bienes.Obtener.Acciones_SinCot_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerDineroEfectivo/:username",  Bienes.Obtener.Dinero_Efectivo_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerAccFondosOblNeg/:username",  Bienes.Obtener.AccionesFondosObligNegociables_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerInmueblesDelExterior/:username",  Bienes.Obtener.InmueblesDelExterior_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerVehiculosDelExterior/:username",  Bienes.Obtener.VehiculosDelExterior_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerDepositosDelExterior/:username",  Bienes.Obtener.DepositosDelExterior_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerBienesDelExterior/:username",  Bienes.Obtener.BienesDelExterior_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerParticipacionesDelExterior/:username",  Bienes.Obtener.ParticipacionesSocietariasDelExterior_ByUser, connect.__sql, connect.responderResult);

router.get("/obtenerCompraVentaMoneda/:username",  Bienes.Obtener.CompraVentaMoneda_ByUser, connect.__sql, connect.responderResult);

router.post("/agregarVehiculo",  Bienes.Insert.newVehiculo, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarVehiculo/:id",  Bienes.Delete.VehiculosById, connect.__sql, connect.responderResult);

router.post("/agregarInmueble",  Bienes.Insert.Inmueble, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarInmuebles/:id",  Bienes.Delete.InmueblesById, connect.__sql, connect.responderResult);

router.post("/agregarEmbarcacion",  Bienes.Insert.Embarcacion, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarEmbarcacion/:id",  Bienes.Delete.EmbarcacionId, connect.__sql, connect.responderResult);

router.post("/agregarAeronave",  Bienes.Insert.Aeronave, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarAeronave/:id",  Bienes.Delete.AeronaveId, connect.__sql, connect.responderResult);

router.post("/agregarCuenta",  Bienes.Insert.Cuenta, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarCuenta/:id",  Bienes.Delete.CuentasId, connect.__sql, connect.responderResult);

router.post("/agregarOtrosBienes",  Bienes.Insert.OtrosBienes, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarOtrosBienes/:id",  Bienes.Delete.OtrosBienesId, connect.__sql, connect.responderResult);

router.post("/agregarTitulos",  Bienes.Insert.Titulos_V, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarTitulos/:id",  Bienes.Delete.Titulos_VById, connect.__sql, connect.responderResult);

router.post("/agregarTituloSinCot",  Bienes.Insert.TituloSinCot, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarTituloSinCot/:id",  Bienes.Delete.Titulos_SinCot_ById, connect.__sql, connect.responderResult);

router.post("/agregarTituloConCot",  Bienes.Insert.TituloConCot, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarTituloConCot/:id",  Bienes.Delete.Titulos_ConCot_ById, connect.__sql, connect.responderResult);

router.post("/agregarAccionesSinCot",  Bienes.Insert.AccionesSinCot, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarAccionesSinCot/:id",  Bienes.Delete.Acciones_SinCot_ById, connect.__sql, connect.responderResult);

router.post("/agregarDineroEfectivo",  Bienes.Insert.DineroEfectivo, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarDineroEfectivo/:id",  Bienes.Delete.Dinero_Efectivo_ById, connect.__sql, connect.responderResult);

router.post("/agregarAccFondosOblNeg",  Bienes.Insert.AccionesFondosObligNegociables, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarAccFondosOblNeg/:id",  Bienes.Delete.AccionesFondosObligNegociables_ById, connect.__sql, connect.responderResult);

router.post("/agregarInmuebleDelExterior",  Bienes.Insert.InmuebleDelExterior, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarInmuebleDelExterior/:id",  Bienes.Delete.InmuebleDelExterior_ById, connect.__sql, connect.responderResult);

router.post("/agregarVehiculoDelExterior",  Bienes.Insert.VehiculoDelExterior, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarVehiculoDelExterior/:id",  Bienes.Delete.VehiculoDelExterior_ById, connect.__sql, connect.responderResult);

router.post("/agregarDepositoDelExterior",  Bienes.Insert.DepositoDelExterior, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarDepositoDelExterior/:id",  Bienes.Delete.DepositoDelExterior_ById, connect.__sql, connect.responderResult);

router.post("/agregarBienDelExterior",  Bienes.Insert.BienDelExterior, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarBienDelExterior/:id",  Bienes.Delete.BienDelExterior_ById, connect.__sql, connect.responderResult);

router.post("/agregarParticipacionDelExterior",  Bienes.Insert.ParticipacionesSocietariasDelExterior, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarParticipacionDelExterior/:id",  Bienes.Delete.ParticipacionSocietariaDelExterior_ById, connect.__sql, connect.responderResult);

router.post("/agregarCompraVentaMoneda",  Bienes.Insert.CompraVentaMoneda, connect.__sql, function (req: any, res: any, next: any) { res.sendStatus(200); });
router.delete("/quitarCompraVentaMoneda/:id",  Bienes.Delete.CompraVentaMoneda_ById, connect.__sql, connect.responderResult);

// router.post('/upload',UploadFiles.uploadMedia, function(req, res) {
//   res.send(req.filename)
// });

router.get("/calcularCompraVenta/:username",
  Bienes.Obtener.CompraVentaMoneda_ByUser,
  connect.__sql,
  Bienes.Calculo.calcularPresentCompraVentaMoneda,
  function (req: any, res: any, next: any) {
    res.send(req.compraventa);
  }
);


router.get("/obtenerImpuestos/:username",
  Bienes.Calculo.inicializarResult,

  Bienes.Obtener.VehiculosByUser,
  Bienes.Calculo.calcularPresentVehiculos,

  Bienes.Obtener.InmueblesByUser,
  Bienes.Calculo.calcularPresentInmuebles,

  Bienes.Obtener.EmbarcacionByUser,
  Bienes.Calculo.calcularPresentEmbarcacion,

  Bienes.Obtener.AeronaveByUser,
  Bienes.Calculo.calcularPresentAeronaves,

  Bienes.Obtener.CuentasByUser,
  Bienes.Calculo.calcularPresentCuentas,

  Bienes.Obtener.OtrosBienesByUser,
  Bienes.Calculo.calcularPresentOtrosBienes,

  Bienes.Obtener.Titulos_SinCot_ByUser,
  Bienes.Calculo.calcularPresentTitulos_SinCot,

  Bienes.Obtener.Titulos_ConCot_ByUser,
  Bienes.Calculo.calcularPresentTitulos_ConCot,

  Bienes.Obtener.Acciones_SinCot_ByUser,
  Bienes.Obtener.TipoSociedad,
  Bienes.Calculo.calcularPresentAcciones_SinCot,

  Bienes.Obtener.Dinero_Efectivo_ByUser,
  Bienes.Calculo.calcularPresentDineroEfectivo,

  Bienes.Obtener.AccionesFondosObligNegociables_ByUser,
  Bienes.Calculo.calcularPresentAcciones_Fondos_ObligNegociables,

  Bienes.Obtener.InmueblesDelExterior_ByUser,
  Bienes.Calculo.calcularPresentInmueblesDelExterior,

  Bienes.Obtener.VehiculosDelExterior_ByUser,
  Bienes.Calculo.calcularPresentVehiculosDelExterior,

  Bienes.Obtener.DepositosDelExterior_ByUser,
  Bienes.Calculo.calcularPresentDepositosDelExterior,

  Bienes.Obtener.BienesDelExterior_ByUser,
  Bienes.Calculo.calcularPresentBienesDelExterior,

  Bienes.Obtener.ParticipacionesSocietariasDelExterior_ByUser,
  Bienes.Calculo.calcularPresentPresentacionesSocietariasDelExterior,

  Bienes.Calculo.calcularTotal,
  function (req: any, res: any, next: any) {
    res.send(req.TotalCalc);
  });

module.exports = router;
