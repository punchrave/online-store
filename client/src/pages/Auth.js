import { Button, Card, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	console.log(location)

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control placeholder='Введите вашу почту...' className='mt-3' />
					<Form.Control placeholder='Введите вашу пароль...' className='mt-3' />
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: '1rem',
						}}
					>
						{isLogin ? (
							<div>
								Нет аккаунта?
								<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
							</div>
						) : (
							<div>
								Есть аккаунт?
								<NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
							</div>
						)}
						<div>
							<Button variant={'outline-success'}>
								{isLogin ?'Войти':'Регистрация'}
							</Button>
						</div>
					</div>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
