import React, { Component } from 'react'
import { Container, Row, Modal, Button } from 'react-bootstrap'
import DISHES from '../../data/dishes.js'
import COMMENTS from '../../data/comments.js'
import MenuItem from './MenuItem.jsx'
import DishDetail from './DishDetail.jsx'
export class Menu extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    selectedDish: null,
    show: false,
  }

  modalClose = () => {
    this.setState({ show: false })
  }
  modalOpen = () => {
    this.setState({ show: true })
  }
  onDishSelect = (dish) => {
    // console.log(dish)
    this.setState({ selectedDish: dish, show: !this.state.show })
  }

  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          DishSelect={() => this.onDishSelect(item)}
        />
      )
    })

    let dishDetails = null
    if (this.state.selectedDish != null) {
      const comments = this.state.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id
      })
      dishDetails = (
        <DishDetail dish={this.state.selectedDish} comments={comments} />
      )
    }
    document.title = 'Menu Page'
    return (
      <Container>
        <Row lg={3} md={3} sm={6} xs={6}>
          {menu}
        </Row>
        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>{dishDetails}</Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

export default Menu
