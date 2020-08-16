import React, { useEffect, lazy, Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";

// HOC for redux to give access to redux
import { connect } from "react-redux";
// Import action to be used
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";
import { Spinner } from "./components/with-spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

// Along with react router if HomePage is requested Homepage chunk is given
// routing is a place where chunking is safe
// HomePage is lazy loaded
// lazy loading takes sometime since it is async and thus we use React suspense with it
// Should be default import
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shoppage/shoppage.component"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
// Suspense allows us to wrap async component

const App = (props) => {
  const { checkUserSession } = props;
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route
              exact
              path="/signin"
              render={() => {
                return props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                );
              }}
            ></Route>
            <Route exact path="/checkout" component={CheckoutPage}></Route>
          </Suspense>
        </ErrorBoundary>
        <Route
          render={() => {
            return "Error 404 : No Match Found";
          }}
        ></Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => {
      dispatch(checkUserSession());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
