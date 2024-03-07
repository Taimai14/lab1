const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startserver() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("connected to the database");

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}.`);
    });
  } catch (error) {
    console.log("cannot connect to the database", error);
    process.exit();
  }
}

startserver();
