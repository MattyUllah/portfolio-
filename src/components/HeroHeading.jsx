const HeroHeading = () => {
  const typedSpan = document.getElementById("typed");
  const totype = [
    "A Devops engineer",
    "A Web Developer",
    "A Programmer",
    "A Cyber Security engineer",
  ];

  const delayTyping_char = 100;
  const delayErasing_text = 100;
  const delayTyping_text = 500;

  let totypeIndex = 0;
  let charIndex = 0;

  function typeText() {
    if (charIndex < totype[totypeIndex].length) {
      typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, delayTyping_char);
    } else {
      setTimeout(eraseText, delayTyping_text);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      typedSpan.textContent = totype[totypeIndex].substring(0, charIndex - 1);
      charIndex = charIndex - 1;
      setTimeout(eraseText, delayErasing_text);
    } else {
      totypeIndex++;

      if (totypeIndex >= totype.length) totypeIndex = 0;
      setTimeout(typeText, delayTyping_text);
    }
  }

  window.onload = function () {
    if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
  };
  return (
    <div className="wrapper">
      <h1 className="effect-wrapper">
        I am 
        <span id="typed"></span>
       
      </h1>
    </div>
  );
};
export default HeroHeading;
