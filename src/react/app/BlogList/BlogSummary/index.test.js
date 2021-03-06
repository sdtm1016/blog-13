import React from 'react'
import { shallow } from 'enzyme'

import { GithubFlavoredMarkdown } from '../../../components/GithubFlavoredMarkdown'

import { BlogSummary } from './index'

jest.mock('../../../components/GithubFlavoredMarkdown')

test('should not render summary section when summary is empty', () => {
  const component = shallow(<BlogSummary summary="" path="" />)

  expect(component.find(GithubFlavoredMarkdown)).toHaveLength(0)
})

test('should render summary section when summary is not empty', () => {
  const component = shallow(<BlogSummary summary="这是一篇好文章" path="" />)

  expect(component.find(GithubFlavoredMarkdown)).toHaveLength(1)
})
