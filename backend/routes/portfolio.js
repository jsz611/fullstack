const router = require("express").Router();
const res = require("express/lib/response");
const Portfolio = require("../models/Portfolio");

router.post("/", async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });

  try {
    const savedPortfolio = await portfolio.save();
    res.json({
      success: true,
      data: savedPortfolio,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      slug: req.params.slug,
    });

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.patch("/:slug", async (req, res) => {
  try {
    const updatePortfolio = await Portfolio.updateOne(
      {
        slug: req.params.slug,
      },
      {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
      }
    );

    res.json({
      success: true,
      updated: updatePortfolio.modifiedCount,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

router.delete("/:slug", async (req, res) => {
  try {
    const deletePotfolio = await Portfolio.deleteOne({
      slug: req.params.slug,
    });
    res.json({
      success: true,
      deleted: deletePotfolio.deletedCount,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

module.exports = router;
