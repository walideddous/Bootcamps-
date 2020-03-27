const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//Load env variables
dotenv.config({ path: "./config/config.env" });

//Load models
const Bootcamp = require("./models/Bootcamp");
const Course = require("./models/Course");

// Connect DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//Read Json files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/courses.json`, "utf-8")
);

//Import in to DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Course.create(courses);

    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Delete Data from the DB
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();

    console.log("Data destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}