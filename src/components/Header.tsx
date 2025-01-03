import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const [user, setUser] = useState("false");
  // const Navigate
  return (
    <div className="flex items-center  p-4  bg-white justify-between  rounded-md mb-1  ">
      {/* 로고 섹션  */}
      <Link to={"/"} className="ml-7">
        <img src="public\logoipsum-338.svg" alt="" />
      </Link>

      {/* 버튼 섹션 */}
      {user ? (
        //  데스크탑 버전메뉴
        <>
          <div className=" hidden md:flex gap-2 mr-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              마이페이지{user.neckname}
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              로그아웃
            </button>
          </div>
          <div className="block md:hidden">
            <Hamburger />
          </div>
        </>
      ) : (
        <>
          <div className=" flex gap-2 mr-5">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              로그인
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              회원가입
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
