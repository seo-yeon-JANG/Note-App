import styled from "styled-components";

const ButtonBlock = styled.div`
  display: flex;
  margin: 1rem;
`;

const ControlButton = styled.button`
  background: ${(props) => props.color};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
`;

// 창 조작 버튼
export const WindowControlButtons = () => {
  return (
    <ButtonBlock>
      <ControlButton color="#FF3232" />
      <ControlButton color="#FFB914" />
      <ControlButton color="#369F36" />
    </ButtonBlock>
  );
};

export const CreateNoteBtn = styled.button`
  margin: 1rem;
  padding: 2rem;
  border: none;
  font-size: 2rem;
  border-radius: 10%;
  background: #ffd228;
  float: right;
  &:hover {
    cursor: pointer;
    background: #ffbe0a;
  }
`;
