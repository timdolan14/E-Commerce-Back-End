const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../Develop/models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const data = await data.findAll({
      include: [{ model: Reader }],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const data = await data.findByPk(blank.data, {
      include: [{ model: Reader }],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const Data = await data.create(data.body);
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const Data = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!Data) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
