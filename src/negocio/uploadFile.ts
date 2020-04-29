import { Response, Request, NextFunction } from "express";
const formidable = require("formidable");
const path = require("path");

export let uploadMedia = function (req: any, res: any, next: NextFunction) {
    if (!req.files || Object.keys(req.files).length == 0) {
        req.filename = "";
        next();
        return;
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    //   console.log(req.files);
    // let sampleFile = req.body.file;
    // console.log("llego aca:",req.files.file);
    req.filename = [];
    let i = 0;
    for (const myFile in req.files) {
        i++;
        const file = req.files[myFile];
        // console.log("File:",file);
        // Use the mv() method to place the file somewhere on your server
        const stringHora: String = obtenerStringHora();
        const fileName: String = stringHora;
        const fileExt: String = file.name.split(".")[1];
        req.filename.push(req.params.username + "_" + fileName + "_" + i + "." + fileExt);

        file.mv(__dirname + "/../public/files/" + req.filename[i], function (err: any) {
            if (err)
                return res.status(500).send(err);
        });
    }
    next();
};

const obtenerStringHora = function (): String {
    const dateNow: Date = new Date();
    const dateUTC: Date = new Date(dateNow.getUTCFullYear(), dateNow.getUTCMonth(), dateNow.getUTCDate(), dateNow.getUTCHours(), dateNow.getUTCMinutes(), dateNow.getUTCSeconds());
    const tz = -3;
    const seconds = (tz * 60 * 60) * 1000;
    dateUTC.setTime(dateUTC.getTime() + seconds);
    const fechayhora = dateUTC;
    const stringHora = ajustar(2, fechayhora.getDate()) + "" + ajustar(2, (fechayhora.getMonth() + 1)) + "" + fechayhora.getFullYear() + "" + ajustar(2, fechayhora.getHours()) + "" + ajustar(2, fechayhora.getMinutes()) + "" + ajustar(2, fechayhora.getSeconds());
    return stringHora;
};


const ajustar = function (tam: any, num: any): any {
    tam = tam - 1;
    if (num.toString().length <= tam) return ajustar(tam, "0" + num);
    else return num;
};

// module.exports = {
//     uploadMedia
// }