const express = require("express");
const router = require("express").Router();

const userController = require("../controllers/userController");
const rolePermission = require("../middlewares/rolePermission");

// User profile
router.get("/:userId", userController.getUser);
// All Users page
router.get(
  "/participants",
  rolePermission.grantAccess("readAny", "profile"),
  userController.getUsers
);
// Update user profile
router.put(
  "/:userId",
  rolePermission.grantAccess("updateAny", "profile"),
  userController.updateUser
);
// Delete a user from the database
router.delete(
  "/:userId",
  rolePermission.grantAccess("deleteAny", "profile", userController.deleteUser)
);
module.exports = router;