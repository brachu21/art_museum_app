import React from 'react';
import AppWrapper from "./styles/AppWrapper";
import Header from './components/header/Header';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <AppWrapper menuOpen={this.props.menuOpen}>
                    {this.props.children}
                </AppWrapper>
            </>
        )
    }
}

//
// function App({props, menuOpen}) {
//
//     const GlobalStyle = createGlobalStyle`
//       body {
//         padding: 0;
//         margin: 0;
//         font-family: Montserrat, serif;
//       }
//       *, *::before, *::after {
//         box-sizing: border-box;
//       }
//     `;
//
//     return (
//         <>
//             <Header/>
//             <AppWrapper menuOpen={menuOpen}>
//                 {props.children}
//             </AppWrapper>
//         </>
//     );
// }

function mapState(state) {
    return {menuOpen: state.menuOpen}
}

export default connect(mapState, null)(App);

