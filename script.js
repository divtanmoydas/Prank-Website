const yesRadio = document.getElementById("gender1");
const noRadio = document.getElementById("gender2");
const hackMessage = document.getElementById("hack-message");
const hackScreen = document.querySelector(".hack-screen");
const backButton = document.getElementById("back-btn");
const hackingOverlay = document.getElementById("hacking-overlay");
const consoleText = document.getElementById("console-text");

yesRadio.addEventListener("change", () => {
  hackMessage.classList.remove("glitch");
  hackScreen.classList.remove("show-hack-screen");
});

noRadio.addEventListener("change", () => {
  hackMessage.classList.add("glitch");
  hackScreen.classList.add("show-hack-screen");
});

// Back button hacking animation
backButton.addEventListener("click", () => {
  hackingOverlay.style.display = "block";
  consoleText.innerText = "";
  let lines = [
    "[+] Connecting to target device...",
    "[+] Access granted.",
    "[+] Uploading payload...",
    "[+] Encrypting files...",
    "[+] Sending data to server...",
    "[+] Device Compromised!",
    "[!] Operation complete."
  ];

  let i = 0;
  let interval = setInterval(() => {
    if (i < lines.length) {
      consoleText.innerText += lines[i] + "\n";
      i++;
    } else {
      clearInterval(interval);
    }
  }, 600);
});
