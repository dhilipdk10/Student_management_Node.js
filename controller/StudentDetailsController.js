const { StudentDetailsService } = require("../service/StudentDetailsService");
exports.studentDetailsController = {
    init: function (studentRouter) {
/**
 * @swagger
 * components:
 *   schemas:
 *     studentDetails:
 *       type: object
 *       required:
 *         - name
 *         - parent
 *         - address
 *         - gender
 *         - phoneNumber
 *         - dateOfBirth
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The book title
 *         parent:
 *           type: string
 *           description: The book author
 *         address:
 *           type: string
 *           description: The student address
 *         gender:
 *           type: string
 *           description: The student gender
 *         phoneNumber:
 *           type: integer
 *           decription: The student phoneNumber
 *         dateOfBirth:
 *           type: date
 *           description: The student dateOfBirth
 * 
 *       example:
 *         id: d5fE_asz
 *         name: The New Turing Omnibus
 *         parent: Alexander K. Dewdney
 */
 /**
  * @swagger
  * tags:
  *   name: student
  *   description: The books managing API
  */

        /**
         * @swagger
         * /student/get:
         *   get:
         *     summary: Returns the list of all the books
         *     tags: [student]
         *     responses:
         *       200:
         *         description: The list of the books
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/studentDetails'
         */


        studentRouter.get('/get', (req, res) => returnResponse(req, res, StudentDetailsService.getStudent(req, res)));

        /**
         * @swagger
         * /student/get/{id}:
         *   get:
         *     summary: Get the student by id
         *     tags: [student]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: integer
         *         required: true
         *         description: The student id
         *     responses:
         *       200:
         *         description: The student description by id
         *         contens:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/student'
         *       404:
         *         description: The studentId was not found
         */

        studentRouter.get('/get/:id', (req, res) => returnResponse(req, res, StudentDetailsService.getStudentById(req, res)));

        /**
         * @swagger
         * /student/save:
         *   post:
         *     summary: Create a new student details
         *     tags: [student]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/studentDetails'
         *     responses:
         *       200:
         *         description: The student details was successfully created
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/studentDetails'
         *       500:
         *         description: Some server error
         */

        studentRouter.post('/save', (req, res) => returnResponse(req, res, StudentDetailsService.createStudent(req, res)));

/**
 * @swagger
 * /student/update:
 *  put:
 *    summary: Update the student by the id
 *    tags: [student]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/studentDetails'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/studentDetails'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
        studentRouter.put('/update', (req, res) => returnResponse(req, res, StudentDetailsService.updateStudent(req, res)));
/**
 * @swagger
 * /student/delete/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [student]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The student was deleted
 *       404:
 *         description: The student was not found
 */
        studentRouter.delete('/delete/:id', (req, res) => returnResponse(req, res, StudentDetailsService.deleteStudent(req, res)));
/**
 * @swagger
 * /student/delete:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [student]
 *     responses:
 *       200:
 *         description: The student was deleted
 *       404:
 *         description: The student was not found
 */

        studentRouter.delete('/delete', (req, res) => returnResponse(req, res, StudentDetailsService.deleteStudentDetails(req, res)));

        return studentRouter;
    }
}
