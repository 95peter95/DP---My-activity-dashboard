import React from 'react'
import { Dropdown, Header, Icon } from 'semantic-ui-react'

const options = [
  {
    key: 'Last 3 months',
    text: 'Last 3 months',
    value: 'Last 3 months',
    content: 'Last 3 months',
  },
  {
    text: 'All time',
    value: 'All time',
    key: 'All time',
    content: 'All time',
  },
  {
    key: 'this month',
    text: 'this month',
    value: 'this month',
    content: 'This Month',
  },
]

const FilterComponent = () => (
  <Header as='h4'>
    <Icon name='filter icon' />
    <Header.Content>
      {' '}
      <Dropdown
        inline
        header='Adjust time span'
        options={options}
        defaultValue={options[0].value}
      />
    </Header.Content>
  </Header>
)

export default FilterComponent