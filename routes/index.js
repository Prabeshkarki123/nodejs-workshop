const express =require('express');
const HomeController=require('@/controllers/HomeControllers');
const UserController=require('@/controllers/UserController');
const StudentController=require('@/controllers/StudentController');
const router=express.Router();

router.get('/',HomeController.index);
router.get("/home/new", HomeController.new);

router.get("/user", UserController.index);

router.get('/user/new', UserController.new);
router.post('/user/new', UserController.newPost);

router.get('/user/edit/:id', UserController.edit);
router.post('/user/edit/:id', UserController.editPost);

router.get('/student/table', StudentController.index);
router.get('/student/new_form', StudentController.new);
router.post('/student/new_form', StudentController.newPost);

module.exports=router;