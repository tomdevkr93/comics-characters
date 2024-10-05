import { LoginRequest, LoginResponse } from '@/models/networking/auth'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/auth/signin', async ({ request }) => {
    const body = (await request.json()) as LoginRequest

    if (body.email === 'test@test.com' && body.password === '12345678') {
      return HttpResponse.json({
        email: 'test@test.com',
        name: '테스트',
        accessToken: '12345678'
      })
    }

    return HttpResponse.json(null, {
      status: 401,
      statusText: 'Unauthorized'
    })
  })
]
