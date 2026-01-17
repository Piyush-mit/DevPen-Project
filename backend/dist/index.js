"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dbConnect_1 = require("./lib/dbConnect");
const userRouter_1 = require("./routes/userRouter");
const compilerRouter_1 = require("./routes/compilerRouter");
const env_1 = require("./lib/env");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const currDirectory = path_1.default.resolve();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
    origin: [env_1.ENV.CLIENT_URL]
}));
app.use("/compiler", compilerRouter_1.compilerRouter);
app.use("/user", userRouter_1.userRouter);
if (env_1.ENV.NODE_ENV == "production") {
    app.use(express_1.default.static(path_1.default.join(currDirectory, '../frontend/dist')));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path_1.default.join(currDirectory, "../frontend", "dist", "index.html"));
    });
}
const startServer = async () => {
    try {
        await (0, dbConnect_1.dbconnect)();
        app.listen(env_1.ENV.PORT, () => console.log("Server active on port", env_1.ENV.PORT));
    }
    catch (error) {
        console.error("Error starting the server", error);
    }
};
startServer();
//# sourceMappingURL=index.js.map