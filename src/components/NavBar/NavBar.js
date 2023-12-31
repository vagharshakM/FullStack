import classes from './navBar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { removeToken } from '../../utils/utils';
import { setAutorization } from '../../redux/features/authReducer';
import { getToken } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
    const successAuto = useSelector(state => state.userReducer.successAuthorization);
    const disppatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        disppatch(setAutorization(false));
        removeToken();
        if(!getToken()){
            navigate('/')
        }

    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >
                    <Link to={'/todo'}>
                        ToDo
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/" className={classes.navBarItem}>
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                {
                    successAuto ?
                        <Button onClick={handleSignOut}>Sign out</Button>
                        :
                        <Button>
                            <Link to='/signin' className={classes.signIn}>
                                Sing in
                            </Link>
                        </Button>
                }
            </Container>
        </Navbar>

    )
}