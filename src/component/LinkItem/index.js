import React, { useState } from "react";
import {
  Container,
  ScoreWrapper,
  Score,
  LinkName,
  Content,
  LinkUrl,
  Voting,
  UpVote,
  DownVote,
} from "./styled";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import SimpleModal from "../Modal/index";

function LinkItem({ id, title, url, points, upVote, deleteLink }) {
  const [open, setOpen] = useState(false);
  // () => deleteLink(index)
  return (
    <Container>
      <ScoreWrapper>
        <Score>{points}</Score>
        points
      </ScoreWrapper>
      <Content>
        <div>
          <LinkName>{title}</LinkName>
          <LinkUrl href={url} target="_blank">
            ({url})
          </LinkUrl>
        </div>
        <Voting>
          <UpVote onClick={() => upVote(id, points + 1, title, url)}>
            <ArrowUpwardIcon fontSize="small" /> Up Vote
          </UpVote>
          <DownVote onClick={() => upVote(id, points - 1, title, url)}>
            <ArrowDownwardIcon fontSize="small" />
            Down Vote
          </DownVote>
        </Voting>
      </Content>
      <button className="deleteLink" onClick={() => setOpen(true)}>
        <DeleteForeverRoundedIcon />
      </button>
      <SimpleModal
        open={open}
        setOpen={setOpen}
        item={title}
        id={id}
        deleteLink={() => deleteLink(id, title)}
      ></SimpleModal>
    </Container>
  );
}

export default LinkItem;
