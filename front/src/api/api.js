import api from './instance.js'

export const login = data => api.post('login', data)

export const getUserInfo =  () => api.get('userinfo')

export const getRoleList = () => api.get('role/list')

export const updateRole = data =>  api.post('role/update', data)
