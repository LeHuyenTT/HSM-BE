const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

const {
    getAllAssign,
    getAssign,
    getAssignMdw,
    createAssign,
    deleteAssign,
    updateAssign,
    getAssignByAuthorMdw,
    getAllMemberAssign,
    getAssignByIdAssign,
    getAssignByIdAssignment,
    storeResultAssignByID
} = require("../controllers/AssignController");

router.route("/").post(createAssign).get(getAllAssign);
router.get('/:id', getAssignByIdAssign);
router.get('/id/:id', getAssignByIdAssignment);
router.get('/author/:id', getAssignByAuthorMdw, getAssign);
router.delete('/:id', getAssignMdw, deleteAssign);
router.get('/members/:id', getAllMemberAssign);
router.put('/:id', getAssignMdw, updateAssign);
router.post('/result/:id', storeResultAssignByID);

module.exports = router;