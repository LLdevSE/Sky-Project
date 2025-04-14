import Student from "../models/student.js";


export function getAllStudents(req, res) {
    Student.find().then(
        (std) => {
            res.json(std);
        }
    ).catch(
        () => {
            res.json({
                message: "No students found."
            })
        }
    )
}

export function addStudents(req, res) {
    const student = new Student(req.body);
    student.save().then(
        () => {
            res.json({
                message: "Student saved successfully."
            })
        }
    ).catch(
        () => {
            res.json({
                message: "Student not saved."
            })
        }
    )
}

export function updateStudents(req, res) {
    res.json({
        message: "Put request received."
    })
}

export function deleteStudents(req, res) {
    res.json({
        message: "Delete request received."
    })
}

export function search(req, res) {
    const stdName = req.body.name;
    Student.find(
        {
            name: stdName
        }
    ).then(
        (searchName) => {
            res.json(searchName);
        }
    ).catch(
        () => {
            res.json({
                message: "Search ERROR."
            })
        }
    )
}
