/* eslint no-console: "off" */
const server = require('./server').default;

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
