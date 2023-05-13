const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const newProductTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(newProductTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const newProductTags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(newProductTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newProductTags = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newProductTags);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedProductTags = await Tag.update(req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(updatedProductTags);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const newProductTags = await Tag.destroy({
      where: {
        ProductTag_id: req.params.ProductTag.id,
      },
    });

    if (!newProductTags) {
      res.status(404).json({ message: 'No Product Tag found with that id!' });
      return;
    }
    res.status(200).json(newProductTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
