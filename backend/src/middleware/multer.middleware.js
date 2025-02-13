import multer from "multer";
import path from "path";
import fs from "fs";

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// // const publicDir = path.join(__dirname, "public");
// // if (!fs.existsSync(publicDir)) {
// //   fs.mkdirSync(publicDir);
// // }

// const tempDir = path.resolve("/tmp");
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir, { recursive: true });
// }

// const upload = multer({
  
//   destination: function (req, file, cb) {
//     // console.log("Entered Multer", file)
//     cb(null, tempDir);
//   },
//   fileFilter: (req, file, cb) => {
//     // Only allow PDF files
//     if (file.mimetype !== "application/pdf") {
//       return cb(new Error("Only PDF files are allowed"));
//     }
//     cb(null, true);
//   },
// });


const storage = multer.memoryStorage(); // Use memory storage instead of local disk

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});




export { upload };
