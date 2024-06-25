import { BsFillBookmarkStarFill } from "react-icons/bs";
import { GiWindow } from "react-icons/gi";
import { FaWaterLadder } from "react-icons/fa6";
import { LuTrees } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { PiCityFill } from "react-icons/pi";
import { PiFarmFill } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { MdOutlineCabin } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function IconComponent(){
return (
    <div className='buttons'>
        <div className="icon-with-text">
        <BsFillBookmarkStarFill style={{ fontSize: '20px' }}/>
        <span><br/>Icons</span>
        </div>
        <div className="icon-with-text">
        <GiWindow style={{ fontSize: '20px' }}/>
        <span><br/>Amazing Views</span>
        </div>
        <div className="icon-with-text">
        <FaWaterLadder style={{ fontSize: '20px' }}/>
        <span><br/>Clean Pool</span>
        </div>
        <div className="icon-with-text">
        <LuTrees style={{ fontSize: '20px' }}/>
        <span><br/>Countryside</span>
        </div>
        <div className="icon-with-text">
        <FaFire style={{ fontSize: '20px' }}/>
        <span><br/>Trending</span>
        </div>
        <div className="icon-with-text">
        <PiCityFill style={{ fontSize: '20px' }}/>
        <span><br/>Top cities</span>
        </div>
        <div className="icon-with-text">
        <PiFarmFill style={{ fontSize: '20px' }}/>
        <span><br/>Farms</span>
        </div>
        <div className="icon-with-text">
        <TbBeach style={{ fontSize: '20px' }}/>
        <span><br/>Beachfront</span>
        </div>
        <div className="icon-with-text">
        <MdOutlineCabin style={{ fontSize: '20px' }}/>
        <span><br/>Canins</span>
        </div>
        <div className="icon-with-text">
        <BiWorld style={{ fontSize: '20px' }}/>
        <span><br/>Top of the World</span>
        </div>


    </div>

)
};
export default IconComponent;