import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, FormControl, InputLabel, Select } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  upVote,
  deletLink,
  pushNotification,
  setStoreLinks,
} from "../../Redux/actions";
import { Wrapper } from "./styled";
import Header from "../../component/Header/index";
import AddNewLink from "../../component/AddNewLink/index";
import LinkItem from "../../component/LinkItem/index";

function ListPage({
  links,
  upVote,
  deletLink,
  pushNotification,
  setStoreLinks,
}) {
  const [sortValue, setSortValue] = useState("most");

  useEffect(() => {
    let localLinks = localStorage.getItem("links");
    if (localLinks) {
      let linksParse = JSON.parse(localLinks);
      setStoreLinks(linksParse);
    }
  }, []);

  const handleUpVote = (id, points, linkName, linkUrl) => {
    let date = new Date();
    upVote({ id, points, linkName, linkUrl, date });
  };

  const handleDeleteLink = (id, desc) => {
    deletLink(id);
    links.find((item) => item.id === id);
    pushNotification({
      id: id,
      title: "Removed",
      desc: desc,
    });
  };

  const handleChange = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <Container>
      <Header></Header>
      <Wrapper>
        <Link
          to="/addlink"
          style={{
            color: "inherit",
            textDecoration: "inherit",
            display: "inline-block",
          }}
        >
          <AddNewLink></AddNewLink>
        </Link>
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-age-native-simple">Order by</InputLabel>
          <Select native value={sortValue} onChange={handleChange}>
            <option value="most">Most Voted (Z - A)</option>
            <option value="less">Less Voted (A - Z)</option>
          </Select>
        </FormControl>
        {links
          .sort(function (a, b) {
            if (sortValue === "most") {
              if (a.points === b.points) {
                return Date.parse(b.date) - Date.parse(a.date);
              }
              return a.points < b.points ? 1 : -1;
            } else {
              if (a.points === b.points) {
                return Date.parse(b.date) - Date.parse(a.date);
              }
              return a.points > b.points ? 1 : -1;
            }
          })

          // .sort((a, b) =>
          //   sortValue === ""
          //     ? (a, b)
          //     : sortValue === "most"
          //     ? b.points - a.points
          //     : a.points - b.points
          .map((item, i) => {
            return (
              <LinkItem
                key={item.id}
                id={item.id}
                title={item.linkName}
                points={item.points}
                url={item.linkUrl}
                upVote={handleUpVote}
                deleteLink={handleDeleteLink}
              />
            );
          })}
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
  ...bindActionCreators(
    { upVote, deletLink, pushNotification, setStoreLinks },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
