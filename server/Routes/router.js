const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/usersControllers");
const touristPlacecontrollers = require("../Controllers/touristPlaceController");
const upload = require("../multerconfig/storageConfig")


// routes
router.post("/user/register", upload.single("user_profile"), controllers.userpost);
router.get("/user/details", controllers.userget);
router.get("/user/all", controllers.usergetall)
router.get("/user/:id", controllers.singleuserget);
router.put("/user/edit/:id", upload.single("user_profile"), controllers.useredit);
router.delete("/user/delete/:id", controllers.userdelete);
router.put("/user/status/:id", controllers.userstatus);
router.get("/userexport", controllers.userExport);


// routes for tourist place
router.post("/touristplace/add", touristPlacecontrollers.touristPlacePost);
router.get("/touristplace/all", touristPlacecontrollers.touristPlaceGetAll);
router.get("/touristplace/:id", touristPlacecontrollers.singleplaceget);
router.put("/touristplace/edit/:id", touristPlacecontrollers.singleplaceedit);
router.delete("/touristplace/delete/:id", touristPlacecontrollers.singleplacedelete);
// router.get("/touristplaceexport", controllers.touristPlaceExport);


module.exports = router