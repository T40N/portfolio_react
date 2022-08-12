import Draggable from "react-draggable";

const ProfileImage = () => {
  return (
    <div className="relative border-2 border-slate-500 border-solid  h-full aspect-square">
      <Draggable bounds="parent">
        <div className="absolute w-1/2 h-1/2 bg-slate-100 border-2 border-solid border-slate-500 left-32 cursor-move z-10"></div>
      </Draggable>
      <Draggable bounds="parent">
        <div className="w-1/2 rounded-sm overflow-hidden border-2 border-solid border-slate-500 cursor-move">
          <img
            className="cursor-move pointer-events-none"
            src={require("../../../assets/pixlr-bg-result.png")}
          ></img>
        </div>
      </Draggable>
      <div></div>
    </div>
  );
};

export default ProfileImage;
