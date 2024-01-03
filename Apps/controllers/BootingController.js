const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

//! Models
const DeviceModel = require("../models/DeviceModel");

exports.getInfoRoomFromIdDevice = asyncHandler(async (req, res, next) => {
    try {
        const idDevice = req.params.id;

        let cr = await DeviceModel.findById(idDevice).populate("room")
            .populate()
            .exec();
        if (cr == null) {
            res.status(400).json({ success: false });
        }
        console.log(cr);
        res.status(400).json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});