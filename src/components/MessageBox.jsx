import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Span } from "components/style";

const messageInterval = 10000;

const messages = ["Swipe down to restart", "github: SebastianHGonzalez"];

function useMessages() {
  const [messageId, setMessageId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageId((messageId + 1) % messages.length);
    }, messageInterval);

    return () => clearInterval(interval);
  });

  return [messages[messageId]];
}

const Box = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const MessageBox = () => {
  const [message] = useMessages();

  return (
    <Box>
      <Span>{message}</Span>
    </Box>
  );
};

export default MessageBox;
