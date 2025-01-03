import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

const Signup = () => {
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const SignupHendler = async (e: React.FormEvent<HTMLFormElement>) => {
    const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailCheck.test(email)) {
      console.log("이메일을 다시입력해주세요 ");
      alert("이메일을 다시입력해주세요 ");
    }

    if (password.length < 8) {
      alert("비밀번호는 최소 8자리 이상이어야 합니다.");
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
    }

    e.preventDefault();
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
        },
      },
    });
    if (error) {
      console.error("supabase auth error", error);
    }

    console.log(data);
    const { error: Errordata } = await supabase
      .from("user")
      .insert([{ id: data.user?.id, nickname: nickname, email: email }])
      .select();
    if (Errordata) {
      alert(`유저 생성에 실패했습니다. ${Errordata.message}`);
      return;
    }
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center  items-center flex-col h-screen">
        <h1 className=" text-2xl font-bold">회원가입 </h1>
        <form
          action=""
          className="flex flex-col gap-4 w-80  "
          onSubmit={SignupHendler}
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
                setEmail(e.target.value)
              }
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className="text-sm" htmlFor="">
              닉네임
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="닉네임을 입력해주세요 "
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNickname(e.target.value)
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
              placeholder="비밀번호를 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className="text-sm" htmlFor="">
              비밀번호확인
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md">
            회원가입
          </button>
          <Link
            to={"/"}
            className="py-2 px-4 text-center text-blue-500 border border-blue-500 rounded-md"
          >
            로그인하러가기{" "}
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
