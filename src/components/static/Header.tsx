import { Link, NavLink } from "react-router-dom";
import { IoSunnyOutline, IoDesktopOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineNightsStay } from "react-icons/md";
import { useState } from "react";
const Header = () => {

  const  [toggle,setToggle]=useState<boolean>(false)

  const user = JSON.parse(localStorage.getItem("user")!);

  const onToggle=()=>{
    setToggle(!toggle)
  }

  return (
  <div>
    <div className="flex w-full h-[70px] border-b justify-center">
      <div className="flex justify-between w-[96%]">
       <div>Logo</div>

       <div className="flex items-center">
        
        {
          user?(
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-red-500 text-white font-bold text-[20px] mx-3 hover:cursor-pointer "
            onClick={onToggle}
            > p
            </div>
             
          ):(
            <Link 
            to="/singIn"
            className="min-w-10 px-5 h-10 flex justify-center items-center rounded-sm bg-purple-500 text-white text-[20px] mx-3 
            hover:cursor-pointer"
            onClick={() =>{}}
            >
                   Log In
            </Link>
          )
        }
          <div className="flex items-center bg-gray-200 px-3 py-1 border rounded-md">
            <NavLink 
            to=""
            className={({isActive}:any)=>isActive 
            ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm"
            : "mx-1 text-[35px] rounded-[4px] py-1 px-2 "
          }
            >
            <IoSunnyOutline size={25}/>
            </NavLink>
            <NavLink
                to="/dark"
                className={({ isActive }: any) =>
                  isActive
                    ? "mx-1 text-[30px] bg-white text-[#565656] rounded-[4px] py-1 px-3 shadow-sm "
                    : "mx-1 text-[35px]  rounded-[4px] py-1 px-2 "
                }
              >
                <MdOutlineNightsStay size={25} />
              </NavLink>

              <IoDesktopOutline className="mx-1 text-[35px] rounded-[4px] py-1 px-2 " />

          </div>
       </div>
      </div>
    </div>
{/* Second Face */}
     {
      toggle &&(
        <div className="w-[400px] h-[200px] bg-white shadow-md border rounded-md absolute right-[18%] top-[20%]">
        <div className="flex mt-6">
          <div className="w-16 h-16 flex
          justify-center items-center rounded-full bg-red-500 text-white font-bold text-[20px] mx-3">
             P
          </div>
            <div>
              <div className="text-[20px] font-bold">Name
              </div>
              <div className="leading-3">
                 Email
              </div>
            </div>
        </div>
          <div className="mt-6 pl-4 py-3
          flex items-center text-[gray]
          hover:bg-[lightgray]
          transition-all duration-200
          hover:cursor-pointer
          ">
            <LuLogOut/>
            <span className="ml-8">
              Log Out
            </span>
  
          </div>
  
       </div>
      )
     }

  </div>
  )
}

export default Header