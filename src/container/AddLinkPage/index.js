import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Wrapper, FormGroup } from "./styled";
import Header from "../../component/Header/index";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { addLink, pushNotification } from "../../Redux/actions";
import uuid from "react-uuid";

function AddLinkPage({ addLink, pushNotification }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (url && name) {
      addLink({
        id: uuid(),
        points: 0,
        linkName: name,
        linkUrl: url,
        date: new Date()
      });

      pushNotification({
        title: "Added",
        desc: name,
      });

      setName("");
      setUrl("");
    }
  };

  const onChange = (field, value) => {
    if (field === "name") {
      setName(value);
    } else {
      setUrl(value);
    }
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "inherit",
            display: "flex",
            alignItems: "center",
            margin: "30px 0",
            fontWeight: "700",
          }}
        >
          <KeyboardReturnIcon />
          Return To List
        </Link>
        <h2>Add New Link</h2>
        <form onSubmit={handleSubmit} className="form">
          <FormGroup>
            <label htmlFor="name">Link Name:</label>
            <input
              id="name"
              type="text"
              onChange={(e) => onChange("name", e.target.value)}
              value={name}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="url">Link URL:</label>
            <input
              id="url"
              type="text"
              onChange={(e) => onChange("url", e.target.value)}
              value={url}
            />
          </FormGroup>
          <button type="submit">ADD</button>
        </form>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    links: state.lists,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ addLink, pushNotification }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLinkPage);
