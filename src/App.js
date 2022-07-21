import { useUser } from "./contexts/UserContext";
import { ChatPage } from "./pages/ChatPage";
import { EnterPage } from "./pages/EnterPage/EnterPage.component";

function App() {
  const { joined } = useUser();

  return joined ? <ChatPage /> : <EnterPage />;
}

export default App;
