import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

class App extends Component {
  state = {
    selected: undefined, // può diventare "Uno", "Due" o "Tre"
  }

  // l'unico modo per settare lo stato di App.........
  // ......è fare un this.setState in App!

  setStateOfApp = (newSelected) => {
    // newSelected sarà "Uno", "Due" o "Tre"
    this.setState({
      selected: newSelected,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected} // riceve in lettura il valore corrente
                  setStateOfApp={this.setStateOfApp} // riceve un modo per CAMBIARE il valore di selected in App
                />
              </Col>
              <Col className="my-auto">
                <Detail
                  selected={this.state.selected} // riceve in lettura il valore corrente
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
