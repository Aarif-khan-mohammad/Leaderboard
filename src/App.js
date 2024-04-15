import { MainContainer , Title , Description } from "./styledComponents";
import Header from "./components/Header/index.js";
import Leaderboard from "./components/Leaderboard";
function App() {
  return (
    <MainContainer>
      <Header/>
      <Title>Think &lt;Code&gt; Innovate</Title>
      <Description>Make it work , Mak it right , Make it fast</Description>
      <Leaderboard/>
    </MainContainer>
  );
}

export default App;
