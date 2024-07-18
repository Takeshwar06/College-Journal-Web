import "../CSS/AbstractPopup.css";
import { abstractContents } from "../data/AbstractContent";

const AbstractPopup = ({ index,popupPosition,setShowPopup }) => {
  return (
    <>
      <div
        onMouseOver={()=>setShowPopup(true)}
        onMouseOut={()=>setShowPopup(false)}
        className="abstract_popup_container"
        style={{
          display: `${abstractContents[index - 1]}?"":"none"`,
          top: popupPosition.top,
        }}
      >
        <div className="data_box">{abstractContents[index - 1]?.data}</div>
      </div>
    </>
  );
};

export default AbstractPopup;
