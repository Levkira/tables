import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import FirstTable from './FirstTable';
import SecondTable from './SecondTable';

const panes = [
  {
    menuItem: 'Tab 1', render: () => <Tab.Pane>
      <FirstTable />
    </Tab.Pane>
  },
  {
    menuItem: 'Tab 2', render: () => <Tab.Pane>
      <SecondTable />
    </Tab.Pane>
  },
]

export default class Tabs extends Component {
  state = {}
  handleChange = (e, data) => this.setState(data)
  render() {
    return (
      <div>
        <Tab panes={panes} onTabChange={this.handleChange} />
      </div>
    )
  }
}