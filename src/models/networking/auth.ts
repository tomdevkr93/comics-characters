export interface LoginRequest {
  email: string
  password: string
}

export interface LoginSuccessResponse {
  status: 'success'
  data: {
    email: string
    name: string
    accessToken: string
  }
}

export interface LoginErrorResponse {
  status: 'error'
  error: {
    code: string
    message: string
  }
}

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse
