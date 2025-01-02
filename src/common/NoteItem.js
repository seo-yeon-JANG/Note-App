import styled from "styled-components";
import { SubTitTxt } from "../common/Tittle";

const NoteItemBlock = styled.div`
  height: 20%;
  background: #f5f5f5;
  margin: 1rem;
  border-radius: 10px;
  padding: 2rem;
`;
const Timestamp = styled.p`
  font-size: 2rem;
  color: #9e9e9e;
  padding-left: 1rem;
`;

const NoteItem = () => {
  return (
    <NoteItemBlock>
      <SubTitTxt>새로운 노트</SubTitTxt>
      <Timestamp>몇 초전에 수정했어요.</Timestamp>
    </NoteItemBlock>
  );
};
export default NoteItem;
