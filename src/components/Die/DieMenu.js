import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import './DieMenu.scss'

export default class DieMenu extends Component {
    constructor(props) {
        super(props)
        this.rollD4 = this.rollD4.bind(this)
        this.rollD6 = this.rollD6.bind(this)
        this.rollD8 = this.rollD8.bind(this)
        this.rollD10 = this.rollD10.bind(this)
        this.rollD12 = this.rollD12.bind(this)
        this.rollD20 = this.rollD20.bind(this)
        this.state = {
            activeItem: 'active',
            d4: 0,
            d6: 0,
            d8: 0,
            d10: 0,
            d12: 0,
            d20: 0
        }
    }

    rollD4() {
        let rollD4 = Math.floor(Math.random() * 4) +1
        this.setState({
            d4: rollD4,
        })
    }
    rollD6() {
        let rollD6 = Math.floor(Math.random() * 6) +1
        this.setState({
            d6: rollD6,
        })
    }
    rollD8() {
        let rollD8 = Math.floor(Math.random() * 8) +1
        this.setState({
            d8: rollD8,
        })
    }
    rollD10() {
        let rollD10 = Math.floor(Math.random() * 10) +1
        this.setState({
            d10: rollD10,
        })
    }
    rollD12() {
        let rollD12 = Math.floor(Math.random() * 12) +1
        this.setState({
            d12: rollD12,
        })
    }
    rollD20() {
        let rollD20 = Math.floor(Math.random() * 20) +1
        this.setState({
            d20: rollD20,
        })
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        let activeDice;
        let activeDiceRoller;

        if(activeItem === 'active') {
            activeDice = this.state.d4
            activeDiceRoller = this.rollD4
        } if(activeItem === '2') {
            activeDice = this.state.d6
            activeDiceRoller = this.rollD6
        } if(activeItem === '3') {
            activeDice = this.state.d8
            activeDiceRoller = this.rollD8
        } if(activeItem === '4') {
            activeDice = this.state.d10
            activeDiceRoller = this.rollD10
        } if(activeItem === '5') {
            activeDice = this.state.d12
            activeDiceRoller = this.rollD12
        } if(activeItem === '6') {
            activeDice = this.state.d20
            activeDiceRoller = this.rollD20
        }

        return (
            <div>
                <Segment attached='top'>
                    <div className='dice-wrapper'>
                      <p className='dice-text'>{activeDice}</p>
                    </div>

                    <button className='roll-button' onClick={activeDiceRoller}>Roll</button>
                </Segment>

                <Menu attached='bottom' tabular>
                    <Menu.Item name='active' active={activeItem === 'active'} onClick={this.handleItemClick}>
                        D4
                    </Menu.Item>

                    <Menu.Item name='2' active={activeItem === '2'} onClick={this.handleItemClick}>
                        D6
                    </Menu.Item>

                    <Menu.Item name='3' active={activeItem === '3'} onClick={this.handleItemClick}>
                        D8
                    </Menu.Item>

                    <Menu.Item name='4' active={activeItem === '4'} onClick={this.handleItemClick}>
                        D10
                    </Menu.Item>

                    <Menu.Item name='5' active={activeItem === '5'} onClick={this.handleItemClick}>
                        D12
                    </Menu.Item>

                    <Menu.Item name='6' active={activeItem === '6'} onClick={this.handleItemClick}>
                        D20
                    </Menu.Item>
                </Menu>
        </div>
    )

  }
}