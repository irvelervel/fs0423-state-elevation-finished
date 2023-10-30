import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // state = {
  //   selected: undefined, // può diventare "Uno", "Due" o "Tre"
  // }

  // Table riceve l'informazione di "selected" dalle Props, perchè l'informazione è salvata nello stato
  // del suo parent, App

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Uno' })}
            onClick={() => this.props.setStateOfApp('Uno')}
            className={this.checkSelected('Uno')}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Due' })}
            onClick={(e) => this.props.setStateOfApp('Due')}
            className={this.checkSelected('Due')}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Tre' })}
            onClick={(e) => this.props.setStateOfApp('Tre')}
            className={this.checkSelected('Tre')}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Stato del componente: {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
