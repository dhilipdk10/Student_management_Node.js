//const { request } = require("express");

const StudentDetails = require("../model/studentDetails");

exports.StudentDetailsService = {
    id: 0,
    StudentDetailsList: [],



    getStudent: function (req, res) {
        return new Promise(async (resolve, reject) => {
            try {
                // var list = this.StudentDetailsList;
                // resolve(list);
                resolve(StudentDetails.findAll())
                .then(stu => {})
                .catch(err => {
                console.log(err)
                 })
            } catch (err) { reject({ errorCode: 400 }) }
        });
    },
    getStudentById: function (req, res) {
        return new Promise(async (resolve, reject) => {
            try {
                const studentId = req.params.id
                resolve(StudentDetails.findByPk(studentId)).then(studentDetails => {
                    console.log(studentDetails)
                })
                    .catch(err => {
                        reject(err)
                    })
                // const studentDetails = this.StudentDetailsList.find(student => student.id == req.params.id);
                // if (studentDetails != null) {
                // } else {
                //     throw { message: "id" + req.params.id + "id not found" };
                // }

            } catch (error) {
                reject(error)
            }
        });
    },
    createStudent: function (req, res) {
        return new Promise(async (resolve, reject) => {
            try {
                // req.body.id = ++this.id;
                // this.StudentDetailsList.push(req.body);

                const name = req.body.name;
                const parent = req.body.parent;
                const gender = req.body.gender;
                const dateOfBirth = req.body.dateOfBirth;
                const address = req.body.address;
                const phoneNumber = req.body.phoneNumber;
                StudentDetails.create({
                    name: name,
                    parent: parent,
                    gender: gender,
                    dateOfBirth: dateOfBirth,
                    address: address,
                    phoneNumber: phoneNumber
                })
                resolve(req.body);
            } catch (error) {
                // console.log(error);
                reject({ errorCode: 400, message: "Student Details is empty" })
            }
        });
    },
    updateStudent: function (req, res) {
        return new Promise(async (resolve, reject) => {
            try {
                const id = req.body.id;
                const updateName = req.body.name;
                const updateParent = req.body.parent;
                const updatedGender = req.body.gender;
                const updatedDateOfBirth = req.body.dateOfBirth;
                const updatedAddress = req.body.address;
                const updatedPhoneNumber = req.body.phoneNumber;

                StudentDetails.findByPk(id).then((studentDetails) => {
                    studentDetails.name = updateName;
                    studentDetails.parent = updateParent;
                    studentDetails.gender = updatedGender;
                    studentDetails.dateOfBirth = updatedDateOfBirth;
                    studentDetails.address = updatedAddress;
                    studentDetails.phoneNumber = updatedPhoneNumber;
                    return studentDetails.save();
                }).then(result => {
                    console.log("Updated succesfully");
                    resolve(req.body);
                }).catch(err => {
                   // throw { message: req.body.id + "Id is not found" };
                })
                // var updated = false;
                // for (var i = 0; i < this.StudentDetailsList.length; i++) {
                //     var student = this.StudentDetailsList[i]
                //     if (student.id === req.body.id) {
                //         this.StudentDetailsList[i] = req.body;
                //         updated = true;
                //         break;
                //     }
                // }

                // if (updated) {
                //     resolve(req.body);
                // } else {
                //     throw { message: "id not fount" };
                // }
            } catch (err) {
                reject(err)
            }
        });
    },


    deleteStudent: function (req, res) {
        return new Promise(async (resolve, reject) => {
            try {
            // var index = null;
            // for (var i = 0; i < this.StudentDetailsList.length; i++) {
            //     var student = this.StudentDetailsList[i]
            //     if (student.id == req.params.id) {
            //         index = i;
            //         break;
            //     }
            // }
            // if (index != null) {
            //     this.StudentDetailsList.splice(index, 1);
            //     resolve({ message: "successfully deleted" })
            // } else {
            //     throw { message: "Id not found" };
            // }
            const studentId = await StudentDetails.findByPk(req.params.id);
            if(studentId){
                StudentDetails.destroy({where :{id : req.params.id}})
                .then(result =>{
                    resolve({message : "id " + req.params.id + " is deleted successfully"})
                }).catch(err => {
                    reject(err)
                })
            }else reject({message :"id " + req.params.id + " is not found"})
             } catch (error) {
                 reject({ error })
             }
        });
    },

    deleteStudentDetails: function (req, res) {
        return new Promise(async (resolve, reject) => {
             try {
            //     this.StudentDetailsList.splice(0, this.StudentDetailsList.length);
            //     resolve({ message: "Successfully Deleted" })
            StudentDetails.destroy({
                truncate: true
            })
                .then(resolve("Successfully deleted"))
                .catch(err => { reject({ err }) })
            } catch (error) {
                reject({ error })
            }
        });
    }
}