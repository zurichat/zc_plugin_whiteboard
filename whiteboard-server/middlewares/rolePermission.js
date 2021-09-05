const { roles } = require("../roles.js");

// Access control for users roles middleware
exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          message: "You do not have permission to perform this action",
        });
      }
      next();
    } catch (err) {
      console.log(err);
    }
  };
};