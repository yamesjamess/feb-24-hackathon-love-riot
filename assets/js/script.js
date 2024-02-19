const compatibilityScoreContainer = document.querySelector(
  ".compatibility-score-container"
);
const compatibilityScoreForm = document.querySelector(".user-input");
const compatibilityPercentage = document.getElementById(
  "compatibility-percentage"
);
const resetForm = document.querySelector(".fa-rotate-left");
const userAndCrushInputs = document.querySelectorAll(".input");
const heartImg = document.querySelector(".compatibility-section-img");
const headerH1 = document.querySelector(".header-h1");
const loadingSpinner = document.querySelector(".loading-spinner");
const stickerImg = document.getElementById("sticker");
const resultsLink = document.getElementById("results-link");
const playButton = document.getElementById("playButton");
const compatibilityData = {
  "Aries-Aries": 50,
  "Aries-Taurus": 38,
  "Aries-Gemini": 83,
  "Aries-Cancer": 42,
  "Aries-Leo": 97,
  "Aries-Virgo": 63,
  "Aries-Libra": 85,
  "Aries-Scorpio": 50,
  "Aries-Sagittarius": 93,
  "Aries-Capricorn": 47,
  "Aries-Aquarius": 78,
  "Aries-Pisces": 67,

  "Taurus-Aries": 38,
  "Taurus-Taurus": 65,
  "Taurus-Gemini": 33,
  "Taurus-Cancer": 97,
  "Taurus-Leo": 73,
  "Taurus-Virgo": 90,
  "Taurus-Libra": 65,
  "Taurus-Scorpio": 88,
  "Taurus-Sagittarius": 30,
  "Taurus-Capricorn": 98,
  "Taurus-Aquarius": 58,
  "Taurus-Pisces": 85,

  "Gemini-Aries": 83,
  "Gemini-Taurus": 33,
  "Gemini-Gemini": 60,
  "Gemini-Cancer": 65,
  "Gemini-Leo": 88,
  "Gemini-Virgo": 68,
  "Gemini-Libra": 93,
  "Gemini-Scorpio": 28,
  "Gemini-Sagittarius": 60,
  "Gemini-Capricorn": 68,
  "Gemini-Aquarius": 85,
  "Gemini-Pisces": 53,

  "Cancer-Aries": 42,
  "Cancer-Taurus": 97,
  "Cancer-Gemini": 65,
  "Cancer-Cancer": 75,
  "Cancer-Leo": 35,
  "Cancer-Virgo": 90,
  "Cancer-Libra": 43,
  "Cancer-Scorpio": 94,
  "Cancer-Sagittarius": 53,
  "Cancer-Capricorn": 83,
  "Cancer-Aquarius": 27,
  "Cancer-Pisces": 98,

  "Leo-Aries": 97,
  "Leo-Taurus": 73,
  "Leo-Gemini": 88,
  "Leo-Cancer": 35,
  "Leo-Leo": 45,
  "Leo-Virgo": 35,
  "Leo-Libra": 97,
  "Leo-Scorpio": 58,
  "Leo-Sagittarius": 93,
  "Leo-Capricorn": 35,
  "Leo-Aquarius": 68,
  "Leo-Pisces": 38,

  "Virgo-Aries": 63,
  "Virgo-Taurus": 90,
  "Virgo-Gemini": 68,
  "Virgo-Cancer": 90,
  "Virgo-Leo": 35,
  "Virgo-Virgo": 65,
  "Virgo-Libra": 68,
  "Virgo-Scorpio": 88,
  "Virgo-Sagittarius": 48,
  "Virgo-Capricorn": 95,
  "Virgo-Aquarius": 30,
  "Virgo-Pisces": 88,

  "Libra-Aries": 85,
  "Libra-Taurus": 65,
  "Libra-Gemini": 93,
  "Libra-Cancer": 43,
  "Libra-Leo": 97,
  "Libra-Virgo": 68,
  "Libra-Libra": 75,
  "Libra-Scorpio": 35,
  "Libra-Sagittarius": 73,
  "Libra-Capricorn": 55,
  "Libra-Aquarius": 90,
  "Libra-Pisces": 88,

  "Scorpio-Aries": 50,
  "Scorpio-Taurus": 88,
  "Scorpio-Gemini": 28,
  "Scorpio-Cancer": 94,
  "Scorpio-Leo": 58,
  "Scorpio-Virgo": 88,
  "Scorpio-Libra": 35,
  "Scorpio-Scorpio": 80,
  "Scorpio-Sagittarius": 28,
  "Scorpio-Capricorn": 95,
  "Scorpio-Aquarius": 73,
  "Scorpio-Pisces": 97,

  "Sagittarius-Aries": 93,
  "Sagittarius-Taurus": 30,
  "Sagittarius-Gemini": 60,
  "Sagittarius-Cancer": 53,
  "Sagittarius-Leo": 93,
  "Sagittarius-Virgo": 48,
  "Sagittarius-Libra": 73,
  "Sagittarius-Scorpio": 28,
  "Sagittarius-Sagittarius": 45,
  "Sagittarius-Capricorn": 60,
  "Sagittarius-Aquarius": 90,
  "Sagittarius-Pisces": 63,

  "Capricorn-Aries": 47,
  "Capricorn-Taurus": 98,
  "Capricorn-Gemini": 68,
  "Capricorn-Cancer": 83,
  "Capricorn-Leo": 35,
  "Capricorn-Virgo": 95,
  "Capricorn-Libra": 55,
  "Capricorn-Scorpio": 95,
  "Capricorn-Sagittarius": 60,
  "Capricorn-Capricorn": 75,
  "Capricorn-Aquarius": 68,
  "Capricorn-Pisces": 88,

  "Aquarius-Aries": 78,
  "Aquarius-Taurus": 58,
  "Aquarius-Gemini": 85,
  "Aquarius-Cancer": 27,
  "Aquarius-Leo": 68,
  "Aquarius-Virgo": 30,
  "Aquarius-Libra": 90,
  "Aquarius-Scorpio": 73,
  "Aquarius-Sagittarius": 90,
  "Aquarius-Capricorn": 68,
  "Aquarius-Aquarius": 45,
  "Aquarius-Pisces": 45,

  "Pisces-Aries": 67,
  "Pisces-Taurus": 85,
  "Pisces-Gemini": 53,
  "Pisces-Cancer": 98,
  "Pisces-Leo": 38,
  "Pisces-Virgo": 88,
  "Pisces-Libra": 88,
  "Pisces-Scorpio": 97,
  "Pisces-Sagittarius": 63,
  "Pisces-Capricorn": 88,
  "Pisces-Aquarius": 45,
  "Pisces-Pisces": 60,
};

// function to handle when user submit their form
const handleSubmit = (e) => {
  e.preventDefault();
  const userStarSign = document.getElementById("user-star-sign").value;
  const crushStarSign = document.getElementById("crush-star-sign").value;
  const key = `${userStarSign}-${crushStarSign}`;
  const score = compatibilityData[key];

  // Reset the initialScore before calculating the new compatibility score
  let initialScore = 0;

  // Display the compatibility score
  heartImg.style.visibility = "collapse";
  heartImg.style.display = "none";
  headerH1.textContent = "Crunching numbers, igniting sparks!";
  compatibilityScoreContainer.style.visibility = "collapse";
  compatibilityScoreContainer.style.display = "none";
  loadingSpinner.style.visibility = "visible";
  loadingSpinner.style.display = "flex";
  loadingSpinner.style.opacity = "1";

  setTimeout(() => {
    const intervalId = setInterval(() => {
      initialScore += 1;
      if (initialScore > score) {
        initialScore = score;
        clearInterval(intervalId);
      } else {
        compatibilityPercentage.textContent = initialScore + "%";
        resultsLink.style.display = "block";
      }
    }, 20);

    // Display stickers based on compatibility score
    if (score >= 0 && score < 30) {
      stickerImg.src = "assets/images/shock.webp";
    } else if (score >= 30 && score < 50) {
      stickerImg.src = "assets/images/confused.webp";
    } else if (score >= 50 && score < 70) {
      stickerImg.src = "assets/images/sorry.webp";
    } else if (score >= 70 && score < 90) {
      stickerImg.src = "assets/images/pink-cool.webp";
    } else {
      stickerImg.src = "assets/images/fall-in-love.webp";
    }

    headerH1.textContent = "Love Riot Calculator";
    compatibilityScoreContainer.style.visibility = "visible";
    compatibilityScoreContainer.style.display = "flex";
    compatibilityScoreContainer.style.opacity = "1";
    loadingSpinner.style.visibility = "collapse";
    loadingSpinner.style.display = "none";
    loadingSpinner.style.opacity = "0";
  }, 1500);
};

// function to handle when user click the reset button
const handleReset = () => {
  userAndCrushInputs.forEach((input) => {
    input.value = "";
  });

  compatibilityScoreContainer.style.visibility = "collapse";
  compatibilityScoreContainer.style.display = "none";
  compatibilityScoreContainer.style.opacity = "0";
  heartImg.style.visibility = "visible";
  heartImg.style.display = "block";
  resultsLink.style.display = "none";
};

// function to handle the play button on index.html
const handlePlay = () => {
  window.location.href = "game.html";
};

if (playButton) {
  playButton.addEventListener("click", handlePlay);
} else if (compatibilityScoreForm && resetForm) {
  compatibilityScoreForm.addEventListener("submit", handleSubmit);
  resetForm.addEventListener("click", handleReset);
};
