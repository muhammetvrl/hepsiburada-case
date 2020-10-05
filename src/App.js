import React from "react";
import { Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListPage from "./container/ListPage/index";
import AddLinkPage from "./container/AddLinkPage/index";
import Toast from "./component/Toast/index";
import { removeNotification } from "./Redux/actions";

function App({ toast, removeNotification }) {
  return (
    <div className="App">
      <Route path="/" exact component={ListPage} />
      <Route path="/addlink" exact component={AddLinkPage} />
      <Toast toastList={toast} removeNotf={removeNotification} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toast: state.toast.notifications,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ removeNotification }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
