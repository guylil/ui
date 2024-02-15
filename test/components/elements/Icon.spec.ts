import { describe, it, expect } from 'vitest'
import { UIcon } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from '../component-render'

describe('Icon', () => {
  it.each([
    ['basic case', {}],
    ['with name', { props: { name: 'i-heroicons-academic-cap' } }],
    ['with dynamic', { props: { name: 'i-heroicons-arrow-small-left-solid', dynamic: true } }],
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof Icon.props>) => {
    if (options !== undefined) {
      options.slots = options.slots || { default: () => 'label' }
      options.slots.default = options.slots.default || (() => 'label')
    }
    const html = await ComponentRender(nameOrHtml, options, UIcon)
    expect(html).toMatchSnapshot()
  })
})