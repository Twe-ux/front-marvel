import { useNavigate } from "react-router-dom";

const Loader = ({ visible, setVisible }) => {
  const navigate = useNavigate();

  // Flag set when the video is shown.

  if (!visible) {
    return null;
  }

  return (
    <div className="flex h-full">
      <div className="bg-black w-full rounded-md flex justify-center items-center flex-col overflow-hidden">
        <video
          autoPlay
          muted
          width="100%"
          onClick={() => {
            setVisible(false);
            navigate("/characters");
          }}
          onEnded={() => {
            setVisible(false);
            navigate("/characters");
          }}
        >
          <source src="/src/assets/video/Marvel-Intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Loader;
