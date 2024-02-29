import express from "express";
import morgan from "morgan";
import "dotenv/config";
import signale from "signale";
import routes from "./routes/index.js";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      error: "Malformed request JSON",
    });
  }
  next();
});

// Routes
app.use("/", routes);

// 404 Handler
app.use((req, res) => {
  res.status(200).json({
    ping: "pong",
  });
});

// Start and Stop methods
app.start = async (appConfig) => {
  try {
    const port = appConfig?.port || process.env.APP_PORT || 3000;
    const server = app.listen(port, () => {
      signale.info(`Server listening on port ${port}`);
    });
    return server;
  } catch (err) {
    signale.error(err);
    process.exit(1);
  }
};

app.stop = async () => {
  try {
  } catch (err) {
    signale.error(err);
    process.exit(1);
  }
};

// Start the server only if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  process.on("unhandledRejection", (reason, promise) => {
    signale.error("Unhandled Rejection at:", promise, "reason:", reason);
  });
  app.start({});
}

export default app;
