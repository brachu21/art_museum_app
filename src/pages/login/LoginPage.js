import React from 'react';
import {LoginContent, Input, Hint, Title, Address, BluredBackground} from './StyledLogin';
import Button from '../../components/button/button';
import BackgroundImage from '../../img/backgroundImage.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const LoginPage = ({logIn}) => (
    <>
        <BluredBackground image={BackgroundImage}/>
        <LoginContent>
            <div>
                <div>
                    <Title>Your<br/>
                        Art<br/>
                        Museum</Title>
                </div>
                <div>
                    <Address>
                        151 3rd St<br/>San Francisco, CA 94103
                    </Address>
                </div>
                <div>
                    <Input type='text' placeholder="Email address"/>
                    <Input type='text' placeholder="Password"/>
                    <Hint alignRight={true}>Forgot your password?</Hint>
                </div>
                <div>
                    <Link onClick={() => logIn} to={'/'}><Button>Log In</Button></Link>
                    <Hint alignRight={false} style={{textAlign: 'start'}}>Don't have an account?</Hint>
                </div>
            </div>
        </LoginContent>
    </>
);


function mapState(state) {
    return {
        menuOpen: state.menuOpen,
        isLogged: state.isLogged
    }
}

function mapDispatch (dispatch) {
    return {
        logIn () {
            dispatch({ type: 'LOG_IN' })
        }
    }
}

export default connect(mapState, mapDispatch)(LoginPage);
