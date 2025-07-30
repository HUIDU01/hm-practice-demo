import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/captcha/image')
}

export const getSmsCaptcha = (mobile,
  captchaKey,
  captchaCode) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      mobile,
      captchaKey,
      captchaCode
    }
  })
}
export const Login = (mobile, smsCode) => {
  return request.post('/passport/login',
    {
      form: {
        smsCode,
        mobile,
        isParty: false,
        partyData: {}
      }
    })
}
