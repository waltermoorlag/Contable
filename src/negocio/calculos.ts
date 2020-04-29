// var pool = require('./connectdb').pool;
import { instantQuery } from "./../negocio/connectdb";


export const calcularPresentVehiculos = function (req: any, res: any, next: any) {
  let vehiculosCargados = [];
  vehiculosCargados = req.resultSQL;
  req.resultSQL;
  const fecha = new Date();
  fecha.setMonth(0);
  fecha.setMonth(fecha.getMonth() - 1);

  const ultDiaanioAnterior = new Date(fecha.getFullYear(), fecha.getMonth(), 31);
  // console.log("Ultimo dia año anterior:",ultDiaanioAnterior);
  let totalRes = 0;
  let totalGrav = 0;
  let totalExcento = 0;
  for (let i = 0; i < vehiculosCargados.length; i++) {
    const a = ultDiaanioAnterior.getTime() - vehiculosCargados[i].fechacompra.getTime();
    // let trimestres = (a / (1000 * 60 * 60 * 24)) / 30 / 3;
    // console.log("a:",(a/1000/60/60/24/30/12));

    const Years = Math.ceil(a / 1000 / 60 / 60 / 24 / 30 / 12);
    let valorRes = 0;
    let valorGrav = 0;
    const valorFiscal = parseFloat(vehiculosCargados[i].valorfiscal) || parseFloat(vehiculosCargados[i].valorcompra);
    // console.log("Anios:",Years);
    if (Years <= 5) {
      const varlorcompra = parseFloat(vehiculosCargados[i].valorcompra) / 5;
      valorRes = varlorcompra * (5 - Years);

      if (valorFiscal > valorRes) {
        valorGrav = valorFiscal;
      } else {
        valorGrav = valorRes;
      }
    } else {
      valorRes = 0;
      valorGrav = 0;
    }
    totalGrav += valorGrav;
    totalRes += valorRes;
    totalExcento += 0;
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Vehiculos", totalExcento, totalGrav, totalRes, detalle: vehiculosCargados });
  }
  // req.TotalCalc.Vehiculos = { totalGrav, totalRes };
  next();
};

export const  calcularPresentInmuebles = function (req: any, res: any, next: any) {
  let inmueblesCargados = [];
  inmueblesCargados = req.resultSQL;
  // req.resultSQL;
  const fechadecla = new Date().getFullYear();
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < inmueblesCargados.length; i++) {

    const difFechas = (fechadecla - inmueblesCargados[i].fechacompra.getFullYear());
    // console.log("Dif Fechas:",difFechas);
    const mes = inmueblesCargados[i].fechacompra.getMonth() + 1;
    let cuartos = 0;
    switch (true) {
      case (mes < 4):
        cuartos = 0;
        break;
      case (mes < 7):
        cuartos = 0.25;
        break;
      case (mes < 10):
        cuartos = 0.5;
        break;
      case (mes < 13):
        cuartos = 0.75;
        break;
    }

    const antiguedad = difFechas - cuartos;
    // console.log("Antiguedad:",antiguedad,cuartos)
    let valorRes = 0;
    let valorGrav = 0;
    const valorFiscal = parseFloat(inmueblesCargados[i].valorfiscal);
    // console.log("valor Fiscal:",valorFiscal);
    const valorInmueble = (inmueblesCargados[i].porc_titular / 100) * inmueblesCargados[i].preciocompra;
    // console.log("valor Inmueble:",valorInmueble);
    valorRes = valorInmueble - (((valorInmueble * 0.8) / 50) * antiguedad);
    // console.log("valor Residual:",valorRes);
    valorGrav = (valorRes > valorFiscal ? valorRes : valorFiscal) * (inmueblesCargados[i].porc_titular / 100);
    // console.log("valor Gravado:",valorGrav);
    totalGrav += valorGrav;
    totalRes += valorRes;
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Inmuebles", totalExcento, totalGrav, totalRes, detalle: inmueblesCargados });
  }
  next();
};


export const  calcularPresentEmbarcacion = function (req: any, res: any, next: any) {
  let embarcacionesCargados = [];
  embarcacionesCargados = req.resultSQL;
  // req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  const fechadecla = new Date().getFullYear();
  for (let i = 0; i < embarcacionesCargados.length; i++) {
    const difFechas = (fechadecla - embarcacionesCargados[i].fechacompra.getFullYear());
    totalRes += ((parseFloat(embarcacionesCargados[i].valorcompra) * (parseFloat(embarcacionesCargados[i].porc_titular) / 100)) / 5) * (5 - difFechas);
    totalGrav += totalRes;
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Embarcaciones", totalExcento, totalGrav, totalRes, detalle: embarcacionesCargados });
  }
  next();
};

export const calcularPresentAeronaves = function (req: any, res: any, next: any) {
  let aeronavesCargados = [];
  aeronavesCargados = req.resultSQL;
  // req.resultSQL;
  const totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  const fechadecla = new Date().getFullYear();
  for (let i = 0; i < aeronavesCargados.length; i++) {
    const difFechas = (fechadecla - aeronavesCargados[i].fechacompra.getFullYear());
    totalGrav += ((parseFloat(aeronavesCargados[i].valor) * (parseFloat(aeronavesCargados[i].porc_titular) / 100)) / 5) * (5 - difFechas);
    // totalGrav += totalRes;
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Aeronaves", totalExcento, totalGrav, totalRes, detalle: aeronavesCargados });
  }
  next();
};

export const calcularPresentCuentas = function (req: any, res: any, next: any) {
  let cuentasCargados = [];
  cuentasCargados = req.resultSQL;
  const totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < cuentasCargados.length; i++) {
    if (cuentasCargados[i].tipocuenta !== "Caja de Ahorro" && cuentasCargados[i].tipocuenta !== "Plazo Fijo") {
      totalGrav += parseFloat(cuentasCargados[i].totalpesos);
    }
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Cuentas", totalExcento, totalGrav, totalRes, detalle: cuentasCargados });
  }
  next();
};
export const calcularPresentOtrosBienes = function (req: any, res: any, next: any) {
  let otrosbienesCargados = [];
  otrosbienesCargados = req.resultSQL;
  const totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < otrosbienesCargados.length; i++) {
    // if(cuentasCargados[i].tipocuenta !== "Caja de Ahorro" && cuentasCargados[i].tipocuenta !== "Plazo Fijo"){
    totalGrav += parseFloat(otrosbienesCargados[i].valorcompra);
    // }
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Otros Bienes", totalExcento, totalGrav, totalRes, detalle: otrosbienesCargados });
  }
  next();
};

export const calcularPresentTitulos_V = function (req: any, res: any, next: any) {
  let titulosCargados = [];
  titulosCargados = req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < titulosCargados.length; i++) {
    // if(cuentasCargados[i].tipocuenta !== "Caja de Ahorro" && cuentasCargados[i].tipocuenta !== "Plazo Fijo"){
    totalGrav += parseFloat(titulosCargados[i].valorTotTit);
    totalRes += parseFloat(titulosCargados[i].valorTotTit);
    // }
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Titulos", totalExcento, totalGrav, totalRes, detalle: titulosCargados });
  }
  next();
};

export const calcularPresentTitulos_SinCot = function (req: any, res: any, next: any) {
  let titulosCargados = [];
  titulosCargados = req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < titulosCargados.length; i++) {
    // if(cuentasCargados[i].tipocuenta !== "Caja de Ahorro" && cuentasCargados[i].tipocuenta !== "Plazo Fijo"){
    totalGrav += parseFloat(titulosCargados[i].valortot);
    totalRes += parseFloat(titulosCargados[i].valortot);
    // }
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Titulos Pub. y Priv. Sin Cotizacion", totalExcento, totalGrav, totalRes, detalle: titulosCargados });
  }
  next();
};

export const calcularPresentTitulos_ConCot = function (req: any, res: any, next: any) {
  let titulosCargados = [];
  titulosCargados = req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < titulosCargados.length; i++) {
    // if(cuentasCargados[i].tipocuenta !== "Caja de Ahorro" && cuentasCargados[i].tipocuenta !== "Plazo Fijo"){
    totalGrav += parseFloat(titulosCargados[i].importetotal);
    totalRes += parseFloat(titulosCargados[i].importetotal);
    // }
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Titulos Pub. y Priv. Con Cotizacion", totalExcento, totalGrav, totalRes, detalle: titulosCargados });
  }
  next();
};


export const calcularPresentAcciones_SinCot = function (req: any, res: any, next: any) {
  // obtenerTipoSociedad(req);
  let titulosCargados = [];
  titulosCargados = req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  let totalExcento = 0;

  for (let i = 0; i < titulosCargados.length; i++) {
    if (req.TipoSocExcentas.filter(function (x: any) { return x.excento; }).map(function (x: any) { return x.id; }).indexOf(titulosCargados[i].tipo) < 0) {
      if (!titulosCargados[i].art69) {
        totalGrav += parseFloat(titulosCargados[i].valor_patrimonial);
      } else {
        totalExcento += parseFloat(titulosCargados[i].valor_patrimonial);
      }
    } else {
      totalExcento += parseFloat(titulosCargados[i].valor_patrimonial);
    }
    totalRes += parseFloat(titulosCargados[i].valor_patrimonial);
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Acciones,cuotas,participaciones sociales sin cotizacion", totalExcento, totalGrav, totalRes, detalle: titulosCargados });
  }
  next();
};

export const calcularPresentDineroEfectivo = function (req: any, res: any, next: any) {
  let dineroCargados = [];
  dineroCargados = req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < dineroCargados.length; i++) {
    totalGrav += parseFloat(dineroCargados[i].total_moneda);
    totalRes += parseFloat(dineroCargados[i].total_moneda);
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Dinero en Efectivo", totalExcento, totalGrav, totalRes, detalle: dineroCargados });
  }
  next();
};

export const calcularPresentAcciones_Fondos_ObligNegociables = function (req: any, res: any, next: any) {
  // obtenerTipoSociedad(req);
  let titulosCargados = [];
  titulosCargados = req.resultSQL;
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;

  for (let i = 0; i < titulosCargados.length; i++) {
    totalGrav += parseFloat(titulosCargados[i].total);
    totalRes += parseFloat(titulosCargados[i].total);
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Acciones, Fondos comun de inversion y Obligaciones negociables", totalExcento, totalGrav, totalRes, detalle: titulosCargados });
  }
  next();
};



export const calcularPresentInmueblesDelExterior = function (req: any, res: any, next: any) {
  const datenow = new Date();
  const ultDiaanioAnterior = (datenow.getFullYear() - 1).toString() + "/12/31";
  // const client = new pool.connect();
  let cotizacion3112 = 1;
  let inmueblesCargados: any[] = [];
  inmueblesCargados = req.resultSQL;

  const msente = "select * from tipo_cambio where moneda = 'USD' and fecha='" + ultDiaanioAnterior + "'";
  instantQuery(msente).then(function (result) {
    console.log(result);
    if (result && result.length > 0) {
      cotizacion3112 = parseFloat(result[0].cotizacion);
    }
    // req.resultSQL;
    // let fechadecla = new Date().getFullYear();
    let totalRes = 0;
    let totalGrav = 0;
    const totalExcento = 0;
    for (let i = 0; i < inmueblesCargados.length; i++) {
      totalGrav += parseFloat(inmueblesCargados[i].valor_en_plaza) * cotizacion3112;
      totalRes += parseFloat(inmueblesCargados[i].valor_en_plaza) * cotizacion3112;
    }
    if (totalGrav || totalRes || totalExcento) {
      req.TotalCalc.push({ descripcion: "Inmuebles del Exterior", totalExcento, totalGrav, totalRes, detalle: inmueblesCargados });
    }
    next();
  });

};

export const calcularPresentVehiculosDelExterior = function (req: any, res: any, next: any) {
  const datenow = new Date();
  const ultDiaanioAnterior = (datenow.getFullYear() - 1).toString() + "/12/31";
  // const client = new pool.connect();
  let cotizacion3112 = 1;
  let vehiculosCargados: any[] = [];
  vehiculosCargados = req.resultSQL;
  // console.log("Vehiculos:",vehiculosCargados);
  // client.query("select * from tipo_cambio where moneda = 'USD' and fecha='$1'", [ultDiaanioAnterior], function (err, result) {
  const msente = "select * from tipo_cambio where moneda = 'USD' and fecha='" + ultDiaanioAnterior + "'";
  instantQuery(msente).then(function (result) {
    console.log(result);
    if (result && result.length > 0) {
       cotizacion3112 = parseFloat(result[0].cotizacion);
    }
    // req.resultSQL;
    // var fechadecla = new Date().getFullYear();
    let totalRes = 0;
    let totalGrav = 0;
    const totalExcento = 0;
    for (let i = 0; i < vehiculosCargados.length; i++) {
      totalGrav += parseFloat(vehiculosCargados[i].valor_en_plaza) * cotizacion3112;
      totalRes += parseFloat(vehiculosCargados[i].valor_en_plaza) * cotizacion3112;
    }
    if (totalGrav || totalRes || totalExcento) {
      req.TotalCalc.push({ descripcion: "Vehiculos del Exterior", totalExcento, totalGrav, totalRes, detalle: vehiculosCargados });
    }
    next();
  });
};

export const calcularPresentDepositosDelExterior = function (req: any, res: any, next: any) {
  let depositosCargados = [];
  depositosCargados = req.resultSQL;
  // req.resultSQL;
  // var fechadecla = new Date().getFullYear();
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < depositosCargados.length; i++) {
    totalGrav += parseFloat(depositosCargados[i].total_pesos);
    totalRes += parseFloat(depositosCargados[i].total_pesos);
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Depositos del Exterior", totalExcento, totalGrav, totalRes, detalle: depositosCargados });
  }
  next();
};


export const calcularPresentBienesDelExterior = function (req: any, res: any, next: any) {
  let bienesCargados = [];
  bienesCargados = req.resultSQL;
  // req.resultSQL;
  // var fechadecla = new Date().getFullYear();
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < bienesCargados.length; i++) {
    totalGrav += parseFloat(bienesCargados[i].total_pesos);
    totalRes += parseFloat(bienesCargados[i].total_pesos);
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Bienes Muebles del Exterior", totalExcento, totalGrav, totalRes, detalle: bienesCargados });
  }
  next();
};

export const calcularPresentPresentacionesSocietariasDelExterior = function (req: any, res: any, next: any) {
  let participacionesCargados = [];
  participacionesCargados = req.resultSQL;
  // req.resultSQL;
  // var fechadecla = new Date().getFullYear();
  let totalRes = 0;
  let totalGrav = 0;
  const totalExcento = 0;
  for (let i = 0; i < participacionesCargados.length; i++) {
    totalGrav += parseFloat(participacionesCargados[i].importe);
    totalRes += parseFloat(participacionesCargados[i].importe);
  }
  if (totalGrav || totalRes || totalExcento) {
    req.TotalCalc.push({ descripcion: "Participaciones Societarias del Exterior", totalExcento, totalGrav, totalRes, detalle: participacionesCargados });
  }
  next();
};



export const calcularPresentCompraVentaMoneda = function (req: any, res: any, next: any) {
  let movimientosCargados = [];
  movimientosCargados = req.resultSQL;
  let compras = movimientosCargados.slice();
  compras = compras.filter(function (item: any) {
    return item.ingoegr === "I";
  });
  let ventas = movimientosCargados.slice();
  ventas = ventas.filter(function (item: any) {
    return item.ingoegr === "E";
  });
  compras.map(function (item: any) {
    item.importe = parseFloat(item.importe);
  });
  ventas.map(function (item: any) {
    item.importe = parseFloat(item.importe);
  });
  ////////////////////////
  // CREACION DE SALDOS //
  /////////////////////////
  const saldos = [];
  for (let c = 0; c < compras.length; c++) {

    if (saldos.length === 0) {
      saldos.push(JSON.parse(JSON.stringify(compras[c])));
    } else {
      let encontro = false;
      for (let s = 0; s < saldos.length; s++) {
        if (saldos[s].moneda === compras[c] && saldos[s].fecha === compras[c].fecha) {
          saldos[s].importe += compras[c].importe;
          encontro = true;
          break;
        }
      }
      if (!encontro) {
        saldos.push(JSON.parse(JSON.stringify(compras[c])));
      }
    }
  }
  /////////////////////////
  /////////////////////////
  /////////////////////////
  /////////////////////////
  //   DESC. LAS VENTAS  //
  /////////////////////////
  let sinSaldo = false;
  for (let v = 0; v < ventas.length; v++) {
    if (sinSaldo) {
      break;
    }
    let importe = ventas[v].importe;
    for (let s = 0; s < saldos.length; s++) {
      // if (saldos[s].descrip.indexOf("Compra") >= 0) {
        if (saldos[s].importe !== 0) {
          if (importe < saldos[s].importe) {
            saldos[s].importe -= importe;
            importe = 0;
            break;
          } else {
            const aux = saldos[s].importe;
            saldos[s].importe = 0;
            importe -= aux;
          }
        }
      // }
      if (s === (saldos.length - 1)) {
        sinSaldo = true;
      }
    }
  }
  /////////////////////////
  /////////////////////////
  /////////////////////////
  let totalPesosCompra = 0;
  compras.map(function (item: any) {
    console.log("Compras:", item.descrip, item.importe, item.tasa);
    totalPesosCompra += item.importe * item.tasa;
  });
  let totalPesosSaldo = 0;
  saldos.map(function (item: any) {
    console.log("Saldos:", item.descrip, item.importe, item.tasa);
    totalPesosSaldo += item.importe * item.tasa;
  });

  let totalPesosVenta = 0;
  ventas.map(function (item: any) {
    totalPesosVenta += item.importe * item.tasa;
  });


  const resultado = {
    COMPRAS: totalPesosCompra.toFixed(2),
    EF: totalPesosSaldo.toFixed(2),
    SUBTOTAL: (totalPesosCompra - totalPesosSaldo).toFixed(2),
    EGRESOS: totalPesosVenta.toFixed(2),
    DIF_CAMBIO: (totalPesosVenta - (totalPesosCompra - totalPesosSaldo)).toFixed(2)
  };
  req.compraventa = { descripcion: "Resultado de Compra y venta", Resultado: resultado, saldos, compras, ventas };
  next();
};
export const calcularTotal = function (req: any, res: any, next: any) {
  let _totalGrav = 0;
  let _totalRes = 0;
  let _totalExcento = 0;
  for (let i = 0; i < req.TotalCalc.length; i++) {
    _totalGrav += req.TotalCalc[i].totalGrav;
    _totalRes += req.TotalCalc[i].totalRes;
    _totalExcento += req.TotalCalc[i].totalExcento || 0;
  }
  req.TotalCalc.push({
    descripcion: "Total", totalExcento: _totalExcento, totalGrav: _totalGrav, totalRes: _totalRes, detalle: []
  });
  next();
};
export const inicializarResult = function (req: any, res: any, next: any) {
  req.TotalCalc = [];
  next();
};


