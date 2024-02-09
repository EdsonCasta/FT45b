require('dotenv').config()
const app = require("./server");
const { db } = require("./db");
const { PORT } = process.env

app.listen(PORT, async () => {
  await db.sync({ force: true });
  console.log(`Server listening on port ${PORT}`);
});
