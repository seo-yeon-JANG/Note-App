import styled from "styled-components";

const TitTxt = styled.h1`
  margin: 1rem;
  font-size: 10rem;
  font-style: bold;
`;
const SubTitTxt = styled.h2`
  margin: 1rem;
  font-size: 4rem;
`;
const Title = () => {
  return (
    <div>
      <TitTxt>Note App</TitTxt>
      <SubTitTxt>Take notes with ease</SubTitTxt>
    </div>
  );
};

export { SubTitTxt };
export default Title;
