import { makeAutoObservable } from "mobx";
import {
  image1,
  image2,
  image3,
  image4,
  music1,
  music2,
  music3,
  music4,
} from "./importsAssets";

class MusicObject {
  id: number;
  title: string;
  img: string;
  music: string;
  isPlaying: boolean;

  constructor(
    id: number,
    title: string,
    img: string,
    music: string,
    isPlaying: boolean
  ) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.music = music;
    this.isPlaying = isPlaying;
    makeAutoObservable(this);
  }
}

class ObjectStore {
  objects: MusicObject[];
  currentMusic: MusicObject;
  currentMusicIndex: number;

  constructor() {
    this.objects = [
      new MusicObject(1, "Imagine Dragons - Radioactive", image1, music1, true),
      new MusicObject(2, "Robin Schulz - Prayer in C", image2, music2, false),
      new MusicObject(3, "Jon Bellion - All Time Low", image3, music3, false),
      new MusicObject(
        4,
        "Twenty one pilots: Stressed Out",
        image4,
        music4,
        false
      ),
    ];
    this.currentMusic = this.objects[0];
    this.currentMusicIndex = 0;
    makeAutoObservable(this);
  }
  setIsPlaying(index: number) {
    if (index >= this.objects.length) {
      index = 0;
    } else if (index < 0) {
      index = this.objects.length - 1;
    }
    this.objects = this.objects.map((obj, i) => ({
      ...obj,
      isPlaying: i === index,
    }));
    if (this.currentMusic.id !== this.objects[index].id) {
      this.currentMusic = { ...this.objects[index] };
      this.currentMusicIndex = index;
    }
  }
}
export { MusicObject as Object, ObjectStore };
