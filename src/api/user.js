import request from '@/utils/request'

/**
 * 验证码图片
 * @param {*} num 随机数
 * @returns
 */
export const yanzhengApi = (num) => {
  return request({
    url: `/user-service/user/imageCode/${num}`,
    responseType: 'blob'
  })
}
/**
 * 登录
 * @param {*} loginName 用户名
 * @param {*} password 密码
 * @param {*} code 验证码
 * @param {*} clientToken 客户端请求验证码的token
 * @param {*} mobile 客户端登录需要提供
 * @param {*} loginType 登录类型
 * @param {*} account 账号(合作商登录需要，手机号)
 * @returns
 */
export const userLoginApi = (
  loginName,
  password,
  code,
  clientToken,
  loginType
) => {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data: {
      loginName,
      password,
      code,
      clientToken,
      loginType
    }
  })
}
