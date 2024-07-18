import { Link } from "react-router-dom";
import "../../CSS/PdfViewer.css";
import { useState, useEffect } from "react";
import AbstractPopup from "./AbstractPopup";

const PdfViewer = ({ element }) => {

      const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleMouseOver = (event) => {
        const rect = event.target.getBoundingClientRect();
        setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left });
        setShowPopup(true);
    };

    const handleMouseOut = () => {
        setShowPopup(false);
    };
  // const [showAbstractPopup, setShowAbstractPopup] = useState(false);
  // const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {
  //   let timeoutId;
  //   if (isHovering) {
  //     timeoutId = setTimeout(() => setShowAbstractPopup(true), 100);
  //   } else {
  //     timeoutId = setTimeout(() => setShowAbstractPopup(false), 100);
  //   }
  //   return () => clearTimeout(timeoutId);
  // }, [isHovering]);

  return (
    <>
      {showPopup && <AbstractPopup setShowPopup={setShowPopup}  popupPosition={popupPosition} index={element.index} />}
      <div className="pdf-container" >
        <p className="quotes">
          <a
            href={`./PDF/valume-1-issue-2/IJSRGI-V1-2-${
                element.index < 10 ? `${element.index}` : element.index
            }.pdf`}
          >
            {element.message}
          </a>
        </p>
        <p className="author">{element.author}</p>
        <p className="college">{element.college_name}</p>
        <div className="key_buttons">
          <div
            className="abstract_link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
              color: "black",
              padding: "10px 15px",
              position:"relative"
            }}
            onMouseOver={ handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <i className="ri-file-pdf-line"></i>
            <Link>Abstract</Link>
          </div>
          <div
            className="full_text_pdf_link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            <i className="ri-file-pdf-2-line"></i>
            <a
              style={{ color: "#393987" }}
              href={`./PDF/valume-1-issue-2/IJSRGI-V1-2-${
                element.index < 10 ? `${element.index}` : element.index
              }.pdf`}
            >
              Full-Text-PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfViewer;



