const Student= require('@/Models/StudentModel');

module.exports = {
    index: async (req, res) => {
        const list = await Student.findAll();
        res.render('student/student_table', {list});
    },
    new : async(req, res) => {
        res.render('student/student_new_form');
    },
    newPost: async(req, res) => {
        const {std_name, std_faculty, std_address, std_phone} = req.body;
        const Student = User.build({std_name, std_faculty, std_address, std_phone});
        await Student.save();
        res.redirect('/student/student_table');
    }
}