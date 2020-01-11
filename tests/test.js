const test = require('ava');
const index = require('../api/index');
const micro = require("micro");
const http = require('http')
const listen = require('test-listen')
const request = require('request-promise')

test('my endpoint', async t => {
  const service = new http.Server(index);

  const url = await listen(service)
  const body = await request(url)

  t.deepEqual(body, 'Hello anonymous!')
  service.close()
})