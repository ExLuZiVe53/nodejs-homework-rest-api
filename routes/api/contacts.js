const express = require('express')

<<<<<<< Updated upstream
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})
=======
const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../midlewares");

const { addSchema, updateFavotiteSchema } = require("../../models/contact");
>>>>>>> Stashed changes

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

<<<<<<< Updated upstream
router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
=======
router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(addSchema), ctrl.updateById);

router.patch("/:id/favorite", isValidId, validateBody(updateFavotiteSchema), ctrl.updateFavorite);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;
>>>>>>> Stashed changes
