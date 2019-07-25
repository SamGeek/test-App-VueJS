import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Informations from '@/components/Informations.vue'

describe('Informations.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Informations, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
