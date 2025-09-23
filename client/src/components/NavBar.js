import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
				Купи Дивайс
			</NavLink>
			{user.isAuth ? (
				<Nav className='ms-auto' style={{ color: 'white' }}>
					<Button variant={'outline-light'}>Админ панель</Button>
					<Button variant={'outline-light'}>Войти</Button>
				</Nav>
			) : (
				<Nav className='ms-auto' style={{ color: 'white' }}>
					<Button
						variant={'outline-light'}
						onClick={() => user.setIsAuth(true)}
					>
						Авторизация
					</Button>
				</Nav>
			)}
		</Navbar>
	)
})

export default NavBar
