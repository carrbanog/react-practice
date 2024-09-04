import { useState } from "react";
import User from "./user";
import getImageUrl from "./user";
import Profile from "./data";

function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing")}
      onUploadImage={() => alert("Uploading")}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button event={onClick}>{children}</button>;
}

export default App;
