const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("participant")
 .readOwn("profile")
 
ac.grant("co-host")
 .extend("participant")
 .updateOwn("profile")
 .readAny("profile")
 
ac.grant("host")
 .extend("participant")
 .extend("co-hosthost")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();