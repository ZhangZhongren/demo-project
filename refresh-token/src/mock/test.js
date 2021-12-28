/* eslint-disable no-debugger */
let token = '000000000'
let refresh_token = '111111111'



export const login = () => {
  setTimeout(() => {
    token = new Date().getTime().toString()
  }, 3000)
  return {
    code: 'success',
    data: {
      token: token,
      refresh_token: refresh_token
    }
  }
}

export const refresh = ({ body }) => {
  const _refresh_token = JSON.parse(body).refresh_token
  if (_refresh_token === refresh_token) {
    refresh_token = new Date().getTime().toString()
    return {
      code: 'success',
      data: {
        token: token,
        refresh_token: refresh_token
      }
    }
  } else {
    return {
      code: 'CODE_LOGGED_OTHER',
      data: null
    }
  }
}

export const data = (data) => {
  const { body } = data
  const _token = JSON.parse(body).token
  if (_token === token) {
    return {
      code: 'success',
      data: {
        a: '111'
      }
    }
  } else {
    return {
      code: 'CODE_TOKEN_EXPIRED',
      data: null
    }
  }
  
}