import React from "react";
import "./Playlist.scss";
import { ObjectStore } from "../../store";
import MusicCard from "../../components/MusicCard/MusicCard";
import { observer } from "mobx-react-lite";

export const objectsStore = new ObjectStore();
const Playlist = () => {
  return (
    <div className="playlist">
      {objectsStore.objects.map((obj, i) => (
        <MusicCard key={obj.id} {...obj} index={i} />
      ))}
    </div>
  );
};

export default observer(Playlist);
