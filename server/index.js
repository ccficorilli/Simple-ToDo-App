/* eslint no-console: "off" */
import { listen } from "./server";

const PORT = process.env.PORT || 3000;

listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
