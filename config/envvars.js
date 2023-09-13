const dotenv = require("dotenv");
dotenv.config();

const port = parseInt(process.env.PORT);
const datasource = process.env.MONGODB_URI;
const masterKey = process.env.JWT_SECRET;
const refreshKey = process.env.JWT_REFRESH;
const mode = process.env.EXEC_MODE;

export { port, datasourcce, masterKey, refreshKey, mode };
