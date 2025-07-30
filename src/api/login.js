import requestpng from '@/utils/request'

export const getPicCode = () => {
  return requestpng.get('/captcha/image')
}
