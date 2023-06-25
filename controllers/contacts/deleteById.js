const { Contact } = require("../../models/contacts");


const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  await Contact.findByIdAndDelete(contactId);
  if (!contactId) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = deleteById;