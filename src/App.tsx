import { observer } from "mobx-react-lite";
import Player from "./Modules/Player/Player";
import Playlist from "./Modules/Playlist/Playlist";

function App() {
  return (
    <div className="app-container">
      <Player />
      <Playlist />
    </div>
  );
}

export default observer(App);
