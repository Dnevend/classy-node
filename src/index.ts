import { Hono } from 'hono'
import fakeUa from "fake-useragent"

const baseUrl = 'https://api.github.com'

const app = new Hono()

app.get('/*', async (c) => {
  const fetchUrl = baseUrl + c.req.path

  const req = new Request(fetchUrl, {
    method: 'get',
    headers: { 'user-agent': fakeUa() }
  })

  return fetch(req)
})

export default app
