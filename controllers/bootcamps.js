const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

//@Desc  Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ sucess: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ msg: "Bad request" });
  }
};

//@Desc  Get bootcamp by id
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      next(
        new ErrorResponse(`bootcamp dont exist with the id ${req.params.id}`)
      );
    }

    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    next(new ErrorResponse(`bootcamp dont exist with the id ${req.params.id}`));
  }
};

//@Desc  Create new bootcamp
//@route POST /api/v1/bootcamps
//@access Public
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      sucess: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//@Desc  Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, msg: "Bootcamp d'ont exist" });
    }

    res.status(200).json({ succes: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//@Desc  Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findOneAndDelete(req.params.id);

    if (!bootcamp) {
      return res
        .status(404)
        .json({ success: false, msg: "Bootcamp d'ont exist" });
    }

    res.status(200).json({ succes: true, msh: "Bootcamp deleted" });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};
