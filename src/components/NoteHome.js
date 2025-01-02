import styled from "styled-components";
import { CreateNoteBtn } from "../common/Button";
import NoteItem from "../common/NoteItem";

const NoteItems = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 50%;
  overflow-y: auto;
`;

const NoteHome = () => {
  return (
    <>
      <NoteItems>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </NoteItems>
      <CreateNoteBtn>New Note</CreateNoteBtn>
    </>
  );
};
export default NoteHome;
