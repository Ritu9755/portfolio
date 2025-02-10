import React from "react";

const WorkCard = ({ w, tabId }) => {
  return (
    <div>
      {tabId === "react-native" ? (
        <a
          href={w.app}
          download={w.title}
          target="_blank"
          rel="noreferrer"
          className="work-link-group"
        >
          <div className="works-card" style={{ marginBottom: "20px" }}>
            <div
              className="works-container"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <div
                className="top-work"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                {/* Display only the image */}
                <img
                  src={w.image}
                  alt={w.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </a>
      ) : (
        <a
          href={w.site}
          target="_blank"
          className="work-link-group"
        >
          <div className="works-card" style={{ marginBottom: "20px" }}>
            <div
              className="works-container"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <div
                className="top-work"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                {/* Display only the image */}
                <img
                  src={w.image}
                  alt={w.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    marginBottom: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default WorkCard;

