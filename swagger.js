const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'API Software Precisão',
      version: '1.0.0',
      description: 'Documentação completa do Software Precisão.',
    },
    servers: [
      {
        url: 'http//localhost:3000',
        description: 'Servidor de Homologação',
      },
      {
        url: 'https://softwareprecisao.com/api',
        description: 'Servidor de Produção',  
      },
    ],
  };
  
  const options = {
    swaggerDefinition,
    // Caminho para os arquivos das rotas
    apis: ['./routes/*.js'], 
  };
  
  const swaggerSpec = require('swagger-jsdoc')(options);
  
  module.exports = swaggerSpec;
  