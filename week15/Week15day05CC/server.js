const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const morgan = require("morgan");
const app = express();
const fs = require("fs");

app.use(express.json(), express.urlencoded({ extended: false }), morgan("dev"));
app.use(express.static("src/"));

app.set("views", "src/views");
app.set("view engine", "hbs");

let images = [];

//Storage for uploaded file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      req.body.title !== ""
        ? req.body.title + Date.now() + ".jpg"
        : Date.now() + file.originalname
    );
  },
});

//Configure cloudinary
cloudinary.config({
  cloud_name: "sample",
  api_key: "874837483274837",
  api_secret: "a676b67565c6767a6767d6767f676fe1",
});

//Define storage path
const upload = multer({ storage });

//Render hbs file
app.get("/", (req, res) => {
  console.log(images);
  res.render("index", { images });
});

//Upload File
app.post("/upload", upload.array("image"), async (req, res) => {
  const files = req.files;

  //Create a promises array
  const promises = [];
  files.forEach((file) => {
    //Store all the promises
    promises.push(uploadToCloudinary(file));
  });

  //Wait for all the promises to be resolved or rejected
  const result = await Promise.all(promises);

  //Add new images to existing image array
  images.push(...result);

  //Redirect
  res.redirect("/");
});

/**
 * Upload Files
 *
 * @param {File to be uploaded} file
 *
 * @returns promise
 */
const uploadToCloudinary = (file) => {
  return new Promise(
    (resolve) => {
      cloudinary.uploader.upload(
        file.path,
        {
          folder: "images",
        },
        (error, result) => {
          if (error === undefined) {
            //Return a promise resolution
            resolve(result.url);

            //Delete file from uploads folder
            fs.unlinkSync(file.path);
          }
        }
      );
    },
    (reject) => {}
  );
};

app.listen(3000, console.log("Server Started"));
