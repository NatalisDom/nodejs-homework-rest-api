const { Contact } = require("../../models/contacts");


const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = [true, false] } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    { owner, favorite },
    {},
    { skip, limit }
  ).populate("owner", "_id email subscription");
  res.json(result);
};

module.exports = getAll;