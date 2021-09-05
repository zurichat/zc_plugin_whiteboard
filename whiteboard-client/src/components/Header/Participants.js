import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  random users for testing.
    fetch("https://randomuser.me/api/?results=5")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setParticipants(data.results);
        setLoading(false);
      });
  }, []);

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 20px;
    position: relative;
  `;

  const Avatar = styled.img`
    border-radius: 3px;
    width: 24px;
    margin-right: 7px;
    height: 24px;
  `;

  const Loader = styled.div`
    font-size: 12px;
    color: red;
  `;

  const MoreAvatarCounter = styled.div`
    border-radius: 3px;
    width: 24px;
    font-size: 15px;
    color: white;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    background: linear-gradient(0deg, rgba(51, 51, 51, 0.81), rgba(51, 51, 51, 0.81));
  `;

  return (
    <Wrapper>
      {loading && <Loader />}
      {participants &&
        participants.map((participant) => (
          <Avatar
            src={participant.picture.thumbnail}
            alt={participant.name.first}
          ></Avatar>
        ))}
        <MoreAvatarCounter>
            +2
        </MoreAvatarCounter>
    </Wrapper>
  );
};

export default Participants;
