const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

//! Models
const AssignModel = require("../models/AssignModel");
const UserModel = require("../models/UserModel");
const QuetionModel = require("../models/QuetionModel");
const ClassModel = require("../models/ClassModel");

exports.createAssign = asyncHandler(async (req, res, next) => {
    try {
        const newAssign = new AssignModel(req.body);
        const savedAssign = await newAssign.save();
        if (savedAssign == null ){
            res.status(400).json({ success: false, message: err.message });
        }else{
            res.status(200).json({
                success: true
            });
        }
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

exports.getAllAssign = asyncHandler(async (req, res, next) => {
    try {
        const assigns = await AssignModel.find().populate('quetions');
        res.status(200).json({
            success: true,
            data: assigns
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

exports.deleteAssign = asyncHandler(async (req, res, next) => {
    try {
        await res.assign.remove();
        res.json({ success: true, message: 'Deleted user' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

exports.getAssign = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: res.assign });
});

exports.updateAssign = asyncHandler(async (req, res, next) => {
    const updateFields = {};
    for (const [key, value] of Object.entries(req.body)) {
        updateFields[key] = value;
    }
    try {
        await AssignModel.updateOne({ _id: res.assign._id }, { $set: updateFields });
        const updatedAssign = await AssignModel.findById(res.assign._id).populate('quetions');;
        res.status(200).json({ success: true, data: updatedAssign });
    } catch (err) {
        res.status(400).json({ success: false, data: err.message });
    }
});

// Middleware function to get a single user by ID
exports.getAssignMdw = asyncHandler(async (req, res, next) => {
    let assign;
    try {
        assign = await AssignModel.findById(req.params.id).populate('quetions');
        if (assign == null) {
            return res.status(404).json({ success: false, message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Cannot find user' });
    }
    res.assign = assign;
    next();
});

exports.getAssignByAuthorMdw = asyncHandler(async (req, res, next) => {
    let assign;
    try {
        user = await UserModel.findOne({username: req.params.id})
        assign = await AssignModel.find({author: user._id}).populate('quetions');
        if (assign == null) {
            return res.status(404).json({ success: false, message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Cannot find user' });
    }
    res.assign = assign;
    next();
});


exports.getAllMemberAssign = asyncHandler(async (req, res, next) => {
    try {
        const assigns = await AssignModel.findOne({nameAssign: req.params.id}).populate('idclass');
        
        const classs = await ClassModel.findById(assigns.idclass._id).populate('members');

        ret = [];
        for (var i = 0; i < classs.members.length; i++) {
            ret.push(classs.members[i].username);
        }
        res.status(200).json({
            success: true,
            data: ret
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});


exports.getAssignByID = asyncHandler(async (req, res, next) => {
    try {
        const assigns = await AssignModel.findOne({idAssign: req.params.id}).populate('quetions');
        // console.log(assigns)
        if (assigns){
            res.status(200).json({
                success: true,
                data: assigns
            });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: err.message });
    }
});