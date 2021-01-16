import TestRenderer from 'react-test-renderer'
import { __NaMe__ } from './__NaMe__'

describe('<__NaMe__/>', () => {
  it('matches snapshot', () => {
    const tree = TestRenderer.create(<__NaMe__ />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
