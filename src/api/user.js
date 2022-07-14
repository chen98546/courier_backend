import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}
// export function login2(data) {
//   return request({
//     url: '/user/api/login',
//     method: 'post',
//     data:{
//       name:data.username,
//       password:data.password

//     }
//   })
// }

export function getments(data) {
  return request({
    url: '/menu/api/resource',
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
