import Request from '../utils/request'

export const Login = () => {
  return Request({
    url: '/api/v1/login',
    method: 'post',
    params: {}
  })
}

export const RefreshToken = () => {
  return Request({
    url: '/api/v1/refresh',
    method: 'post',
    data: {
      refresh_token: localStorage.getItem('REFRESH_TOKEN')
    }
  })
}

export const getData = () => {
  return Request({
    url: '/api/v1/data',
    method: 'post',
    data: {
      token: localStorage.getItem('ACCESS_TOKEN')
    }
  })
}

export const getData1 = () => {
  return Request({
    url: '/api/v1/data1',
    method: 'post',
    data: {
      token: localStorage.getItem('ACCESS_TOKEN')
    }
  })
}

export const getData2 = () => {
  return Request({
    url: '/api/v1/data2',
    method: 'post',
    data: {
      token: localStorage.getItem('ACCESS_TOKEN')
    }
  })
}

export const error = () => {
  return Request({
    url: '/api/v1/00000',
    method: 'post',
    data: {
      token: localStorage.getItem('ACCESS_TOKEN')
    }
  })
}