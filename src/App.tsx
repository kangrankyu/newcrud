import { useState } from "react";
import "./App.css";
import supabase from "./utils/supabase";
import Router from "./sherd/Router";
console.log(supabase);
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
