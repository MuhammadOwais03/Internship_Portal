import multer from "multer";
import path from "path";
import fs from 'fs'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    // Only allow PDF files
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});

export {upload}
