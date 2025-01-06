import React, { useState } from "react";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const LoginpHendler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //공백 체크
    if (!login.trim()) {
      setError("이메일을 입력해주세요.");
      return false;
    }
    //이메일 형식 체크
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login)) {
      setError("올바른 이메일 형식을 입력해주세요.");
      return false;
    }
    //비밀번호 체크
    if (!password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return false;
    }
    // 비밀번호 체크
    if (password.length < 6) {
      setError("비밀번호는 최소 6자리 이상이어야 합니다.");
    }
    setError("");
    let { data, error } = await supabase.auth.signInWithPassword({
      email: login,
      password: password,
    });
    if (error) {
      setError("로그인에 실패했습니다: " + error.message);
      return;
    }

    alert("로그인에 성공했습니다");
    navigate("/");
  };
  return (
    <div className="flex justify-center  items-center flex-col h-screen">
      <h1 className=" text-2xl font-bold">로그인 </h1>
      <form
        action=""
        className="flex flex-col gap-4 w-80  "
        onSubmit={LoginpHendler}
      >
        <div className=" flex flex-col gap-2">
          <label className="text-sm" htmlFor="">
            이메일
          </label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            placeholder="이메일을 입력해주세요요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin(e.target.value)
            }
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className="text-sm" htmlFor="">
            비밀번호
          </label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <p className="text-red-500 text-sm">{error}</p>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
