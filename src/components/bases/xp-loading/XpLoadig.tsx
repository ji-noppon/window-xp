import "./index.scss";
export default function XpLoadig() {
  return (
    <>
      <div className="xp-container">
        <div className="xp-box">
          <div className="flex items-end text-2xl">
            Microsoft
            <img
              src="src/assets/window-logo.png"
              alt="xp-logo"
              className="ml-8"
            />
          </div>
          <div className="relative">
            <h1 className="text-8xl text-white">Windows</h1>
            <span className="absolute -right-6 bottom-16 text-4xl text-orange-600">
              XP
            </span>
          </div>
        </div>

        <div className="xp-loading-wrap">
          <div className="xp-loading-container">
            <div className="square square-animations"></div>
          </div>
          <div className="xp-hide-square"></div>
        </div>
      </div>
    </>
  );
}
