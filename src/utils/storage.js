const INFO_KEY = 'hm_shopping_info'

// 将user的token保存在本地，进行持久化
export const setUserInfotoLocal = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

export const getUserInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userid: '' }
}

export const removeUserInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
