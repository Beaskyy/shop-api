const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handle GET request to /products",
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
  };
  res.status(201).json({
    message: "handle POST request to /products",
    product,
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  if (id === "special") {
    res.status(200).json({
      message: "You discover a special product",
      id,
    });
  } else {
    res.status(200).json({
      message: "You passed an id",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product",
  });
});

module.exports = router;
