const app = require("./app");
const debug = require('debug')('voley-app:server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
  debug(`Server listening on port http://localhost:${PORT}`);
});