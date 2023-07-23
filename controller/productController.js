import Product from "../models/productModels.js";

import { Op } from "sequelize";

export const getProduct = async (req, res) => {
  try {
    let response;
    response = await Product.findAll({
      attributes: [
        "id",
        "uuid",
        "title",
        "price",
        "descriptions",
        "lt",
        "lb",
        "kt",
        "km",
        "area",
        "kredit",
        "carport",
        "typeProperty",
        "sertificate",
        "electrical",
        "floor",
        "conditionProperty",
        "conditionFurnished",
        "potition",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    let response;
    response = await Product.findOne({
      attributes: [
        "id",
        "uuid",
        "title",
        "price",
        "descriptions",
        "lt",
        "lb",
        "kt",
        "km",
        "area",
        "kredit",
        "carport",
        "typeProperty",
        "sertificate",
        "electrical",
        "floor",
        "conditionProperty",
        "conditionFurnished",
        "potition",
      ],
      where: {
        id: req.params.id,
      },
    });
    if (!response) {
      return res.status(404).json({ msg: "data tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    // let response;
    // response = await Product.create(req.body);
    await Product.create(req.body);
    res.status(200).json({ msg: "product berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      return res.status(404).json({ msg: "data tidak ditemukan" });
    }
    await Product.update(req.body, {
      where: {
        id: product.id,
      },
    });
    res.status(200).json({ msg: "update product telah berhasil" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      return res.status(404).json({ msg: "data tidak ditemukan" });
    }
    await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "product telah di hapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findAll();
    if (!product) {
      return res.status(404).json({ msg: "data tidak ditemukan" });
    }
    await Product.destroy({ truncate: true });
    res.status(200).json({ msg: "product telah di hapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
