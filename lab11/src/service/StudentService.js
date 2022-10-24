
import axios from 'axios'
const STUDENT_URL='http://localhost:9090/app/v1/students';

class StudentService{
    
    getAllStudent(){
        return axios.get(STUDENT_URL);
    }

    addStudent(student){
        return axios.post(STUDENT_URL,student);
    }

    getStudentById(studentid){
        return axios.get(STUDENT_URL+"/"+studentid)
    }

    updateStudent(studentid,student){
        return axios.put(STUDENT_URL+"/update/"+studentid,student)
    }

    deleteStudent(studentid){
        return axios.delete(STUDENT_URL+"/delete/"+studentid)
    }
}

export default new StudentService()