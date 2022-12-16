import axios from "axios"

const URL = "http://localhost:8081/api"

class EmpService {
  saveEmp(emp) {
    return axios.post(`${URL}/save`, emp)
  }

  getAllEmp() {
    return axios.get(`${URL}/all`)
  }

  getEmpById(id) {
    return axios.get(`${URL}/${id}`)
  }

  deleteEmp(id) {
    return axios.get(`${URL}/delete/${id}`)
  }

  updateEmp(id, emp) {
    return axios.post(`${URL}/update/${id}`, emp)
  }
}

export default new EmpService()
