const pg = require("pg");

const connectionString = {
  user: "postgres",
  host: "localhost",
  database: "kunderdb",
  password: "1234",
  port: 5432
};

const pool = new pg.Pool(connectionString);


export const responderResult = function (req: any, res: any) { res.send(req.resultSQL); };

export const  __sql = function (req: any, res: any, next: any) {
  pool.connect(function (err: any, client: any, done: any) {
    const resultado: any[] = [];
    if  (err) {
      console.log(err);
    }
    // console.log(req.senteSQL);
    const query = client.query(new pg.Query(req.senteSQL));
    // console.log(req.senteSQL);
    query.on("row", (row: any) => {
      resultado.push(row);
    });
    query.on("end", (res: any) => {
      // console.log("end")
      req.resultSQL = resultado;
      next();

    });
    query.on("error", (res: any) => {
      console.log(res);
    });
    done();
  });
};

const obtenerConnect = function(): any {
    const pool = new pg.Pool(connectionString);
    return pool;
};

const query = async function (q: any) {
  const client = obtenerConnect();
  let res;
  try {
      await client.query("BEGIN");
      try {
          res = await client.query(q);
          await client.query("COMMIT");
      } catch (err) {
          await client.query("ROLLBACK");
          throw err;
      }
  } finally {
      // client.release()
  }
  return res;
};

export const instantQuery = async function  (sente: any) {
  try {
    // console.log(sente);
    const { rows } = await query(sente);
    // console.log(JSON.stringify(rows));
    return rows;
  } catch (err) {
    console.log("Database " + err);
  }
};

// export const { __sql, responderResult,pool,instantQuery};