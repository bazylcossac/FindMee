export const config = {
  server: {
    port: process.env.PORT || 3001,
    nodeEnv: process.env.NODE_ENV || "development",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  logging: {
    level: process.env.LOG_LEVEL || "info",
  },
} as const;

export default config;
