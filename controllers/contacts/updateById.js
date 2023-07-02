const { Contact } = require("../../models/contacts");


const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!contactId) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;