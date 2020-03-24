const dotenv = require("dotenv");

//Load env variables
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode in PORT ${PORT}`
  )
);
