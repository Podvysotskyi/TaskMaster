import { expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import App from '~/app.vue'

it('can also mount an app', async () => {
  const component = await mountSuspended(App, { route: '/' })
  expect(component.html())
})
