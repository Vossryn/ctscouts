import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from "./routes";
import MainMenu from "./components/MainMenu.component"
import Footer from "./components/Footer.component"

import "./styles.scss";
import 'fontsource-roboto';
import 'fontsource-marcellus';

import * as serviceWorker from "./serviceWorker";

import Theme from "./helpers/ui"

let newTheme = responsiveFontSizes(Theme);

ReactDOM.render(
  <BrowserRouter >
    <CssBaseline />
    <ThemeProvider theme={newTheme}>
      <MainMenu />
      <Routes />
      <Footer />
    </ThemeProvider>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
