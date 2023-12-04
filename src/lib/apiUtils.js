import axios from "axios"

export const login = async (email, password) => {
    const response = await axios.get("json/data.json")
    const { data } = response
    const { users } = data

    const isAuth = users.find(el => (el.email === email && el.password === password))
    
    return isAuth ? true : false
}