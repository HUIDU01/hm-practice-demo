const INFO_KEY = 'hm_shopping_info'
const SEARCH_HISTORY = 'hm_search_history'

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

// 获取历史记录
export const getSearchHistory = () => {
  const history = localStorage.getItem(SEARCH_HISTORY)
  return history ? JSON.parse(history) : []
}
// 保存历史记录
export const setSearchHistory = (history) => {
  localStorage.setItem(SEARCH_HISTORY, JSON.stringify(history))
}
