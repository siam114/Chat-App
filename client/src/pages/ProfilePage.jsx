import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex justify-between items-center max-sm:flex-col-reverse rounded-lg">
         <form className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-lg">Profile Details</h3>
          <label htmlFor="avatar" className="flex items-center gap-3 cursor-pointer">
            <input type="file" id="avatar" accept=".png, .jpg, .jpeg" hidden />
            <img src="" alt="" />
          </label>
         </form>
         <img src="" alt="" />
      </div>
    </div>
  )
}

export default ProfilePage
