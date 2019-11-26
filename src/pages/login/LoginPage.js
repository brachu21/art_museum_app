import React from 'react';
import {LoginContent, Input, Hint, Title, Address, BluredBackground} from './StyledLogin';
import Button from '../../components/button/button';
import BackgroundImage from '../../img/backgroundImage.png';

const LoginPage = () => (
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
                    <Button>Log In</Button>
                    <Hint alignRight={false} style={{textAlign: 'start'}}>Don't have an account?</Hint>
                </div>
            </div>
        </LoginContent>
    </>
);
export default LoginPage;
