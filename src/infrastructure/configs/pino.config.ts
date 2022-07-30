export const pinoConfig = {
  pinoHttp: {
    autoLogging: false,
    quietReqLogger: true,
    transport: {
      target: 'pino-http-print', // use the pino-http-print transport and its formatting output
      options: {
        all: true,
        translateTime: true,
      },
    },
  },
};
