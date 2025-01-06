import { useState } from "react";
import "./App.css";
import supabase from "./utils/supabase";
import Router from "./sherd/Router";
import AuthListener from "./providers/AuthProvider";
console.log(supabase);
function App() {
  return (
    <>
      <AuthListener />
      <Router />
    </>
  );
}

export default App;
