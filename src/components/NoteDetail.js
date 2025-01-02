import styled from "styled-components";
import { CreateNoteBtn } from "../common/Button";

const NoteDetailBlock = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 50%;
`;

const NoteTit = styled.input`
  width: 100%;
  background: white;
  height: 15%;
  border-radius: 20px;
  margin-bottom: 2rem;
  font-size: 5rem;
`;
const NoteContent = styled.textarea`
  width: 100%;
  background: white;
  height: 70%;
  border-radius: 20px;
  font-size: 3rem;
  resize: none;
`;

const NoteDetail = () => {
  return (
    <NoteDetailBlock>
      <CreateNoteBtn color="rightgray" hoverColor="gray">
        back
      </CreateNoteBtn>
      <NoteTit />
      <NoteContent />
      <CreateNoteBtn>확인</CreateNoteBtn>
    </NoteDetailBlock>
  );
};
export default NoteDetail;
