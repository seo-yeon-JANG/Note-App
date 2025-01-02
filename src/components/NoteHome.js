import styled from "styled-components";
import { WindowControlButtons, CreateNoteBtn } from "../common/Button";
import Title from "../common/Tittle";
import { SearchBox } from "../common/SearchBox";
import SelectBox from "../common/SelectBox";
import NoteItem from "../common/NoteItem";

const HomeBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  background: white;
  width: 30%;
  border-radius: 5%;
  padding: 3rem;
`;

const NoteItems = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 50%;
  overflow-y: auto;
`;

const NoteHome = () => {
  return (
    <HomeBlock>
      <WindowControlButtons />
      <Title />
      <div style={{ padding: "1rem", display: "flex" }}>
        <SearchBox placeholder="Search" />
        <SelectBox>
          <option value="create">최근 생성순</option>
          <option value="update">최근 수정순</option>
        </SelectBox>
      </div>
      <NoteItems>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </NoteItems>
      <CreateNoteBtn>New Note</CreateNoteBtn>
    </HomeBlock>
  );
};
export default NoteHome;
