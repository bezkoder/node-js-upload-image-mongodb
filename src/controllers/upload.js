const upload = require("../middleware/upload");

const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

    return res.send(`Files have been uploaded.`);

    // console.log(req.file);

    // if (req.file == undefined) {
    //   return res.send(`You must select a file.`);
    // }

    // return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);

    // return res.send(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFiles: uploadFiles
};