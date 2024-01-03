const express = require("express");
const router = express.Router();

const {
    createSchedule,
    getAllSchedules,
    getScheduleByDeviceTeacher,
    getScheduleByTeacher,
    getScheduleByTeacherID,
    getScheduleByDeviceStudent,
    getScheduleByStudent
} = require("../controllers/ScheduleController");

router.route("/").post(createSchedule).get(getAllSchedules);
router.route("/teacher/devices/:id").get(getScheduleByDeviceTeacher);
router.route("/teacher/:id").get(getScheduleByTeacher);
router.route("/cus/teacher/:id").get(getScheduleByTeacherID);
router.route("/student/devices/:id").get(getScheduleByDeviceStudent);
router.route("/student/:id").get(getScheduleByStudent);

module.exports = router;