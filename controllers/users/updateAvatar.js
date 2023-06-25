
const path = require("path");
const fs = require("fs/promises");

const { User } = require("../../models/user");
const { HttpError } = require("../../helpers/index");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");



const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const fileFormat = originalname.slice(
    originalname.indexOf("."),
    originalname.lenght
  );
  if (fileFormat !== ".png" && fileFormat !== ".jpg") {
    throw HttpError(400, "Invalid image format (use JPG/PNG)");
  }
  const fileName = _id + fileFormat;
  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;



