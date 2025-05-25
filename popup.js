// Style on the fly
const style = document.createElement("style");
style.innerHTML = `
  #popupModal {
    display: none;
    position: fixed;
    top: 100px;
    left: 100px;
    width: 400px;
    height: 600px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
    z-index: 1000;
  }
  #popupHeader {
    cursor: move;
    background: #007bff;
    color: white;
    padding: 10px;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
  }
  #closeBtn {
    background: transparent;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  #popupContent iframe {
    width: 100%;
    height: calc(100% - 40px);
    border: none;
  }
`;
document.head.appendChild(style);

// Verify elements exist before proceeding
const popup = document.getElementById("popupModal");
const header = document.getElementById("popupHeader");
const closeBtn = document.getElementById("closeBtn");
const iframe = document.getElementById("popupFrame");

if (!popup || !header || !closeBtn || !iframe) {
  console.error("Popup elements not found!");
  return;
}

// Open function (you call this from your button)
function openPopup() {
  iframe.src = "https://shahariarshuvo.com"; // Updated to your website
  popup.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent page scrolling
}

// Close button
closeBtn.addEventListener("click", () => {
  iframe.src = "";
  popup.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Drag logic
let isDragging = false, offsetX, offsetY;

header.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - popup.offsetLeft;
  offsetY = e.clientY - popup.offsetTop;
  document.body.style.userSelect = "none";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "auto";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  
  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;
  
  // Keep popup within viewport bounds
  popup.style.left = Math.max(0, Math.min(newLeft, window.innerWidth - popup.offsetWidth)) + "px";
  popup.style.top = Math.max(0, Math.min(newTop, window.innerHeight - popup.offsetHeight)) + "px";
});
