import NoteHome from "./components/NoteHome";
import styled from "styled-components";
import { WindowControlButtons } from "./common/Button";
import Title from "./common/Tittle";
// import { SearchBox } from "./common/SearchBox";
// import SelectBox from "./common/SelectBox";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteDetail from "./components/NoteDetail";

const NoteBlock = styled.div`
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

function App() {
  return (
    <NoteBlock>
      <WindowControlButtons />
      <Title />
      {/* <div style={{ padding: "1rem", display: "flex" }}>
        <SearchBox placeholder="Search" />
        <SelectBox>
          <option value="create">최근 생성순</option>
          <option value="update">최근 수정순</option>
        </SelectBox>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NoteHome />} />
          <Route path="/detail" element={<NoteDetail />} />
        </Routes>
      </BrowserRouter>
    </NoteBlock>
  );
}

export default App;
