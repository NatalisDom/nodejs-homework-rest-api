const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const {
  volidateBody,
  isValidId,
  isFavoriteField,
  authenticate,
} = require("../../minddlewares/index");
const {
  addContactSchema,
  updateFavoriteSchema,
} = require("../../schemas/index");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, volidateBody(addContactSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  volidateBody(addContactSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isFavoriteField,
  volidateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;