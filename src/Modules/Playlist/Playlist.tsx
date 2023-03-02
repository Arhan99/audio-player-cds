import React from "react";
import "./Playlist.scss";
import { ObjectStore } from "../../store";
import Music from "../../components/Music/Music";
import { observer } from "mobx-react-lite";

export const objectsStore = new ObjectStore();
const Playlist = () => {
  return (
    <div className="playlist">
      {objectsStore.objects.map((obj, i) => (
        <Music key={obj.id} {...obj} index={i} />
      ))}
    </div>
  );
};

export default observer(Playlist);
