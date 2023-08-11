import dotenv from "dotenv";

dotenv.config();

export const port = parseInt(process.env.PORT);
export const datasource = process.env.MONGODB_URI;
export const masterKey = process.env.JWT_SECRET;
export const refreshKey = process.env.JWT_REFRESH;
export const mode = process.env.EXEC_MODE;
