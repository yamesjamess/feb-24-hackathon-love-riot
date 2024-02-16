const compatibilityScoreContainer = document.querySelector('.compatibility-score-container')
const calculateBtn = document.getElementById('calculate-btn')
const compatibilityScoreForm = document.querySelector('.user-input')
const compatibilityPercentage = document.getElementById('compatibility-percentage')
const resetForm = document.querySelector('.fa-rotate-left')
const userAndCrushInputs = document.querySelectorAll('.input')
const heartImg = document.querySelector('.compatibility-section-img')
const headerH1 = document.querySelector('.header-h1')
const loadingSpinner = document.querySelector('.loading-spinner')

// Dummy user compatibility score 
const compatibilityScore = 89;
let initialScore = compatibilityScore - 30;
compatibilityScoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    heartImg.style.visibility = "collapse";
    headerH1.textContent = "Crunching numbers, igniting sparks!";
    loadingSpinner.style.visibility = "visible";
    loadingSpinner.style.opacity = "1";
    setTimeout(() => {
        const intervalId = setInterval(() => {
            initialScore += 1;
            if (initialScore > compatibilityScore) {
                initialScore = compatibilityScore;
                clearInterval(intervalId);
            } else {
                compatibilityPercentage.textContent = initialScore + "%";
            }}, 20);
                headerH1.textContent = "Love Riot Calculator";
                compatibilityScoreContainer.style.visibility = "visible";
                compatibilityScoreContainer.style.opacity = "1";
                loadingSpinner.style.visibility = "collapse";
                loadingSpinner.style.opacity = "0";
            }, 1500);
        
});

userAndCrushInputs.forEach((input) => {
    resetForm.addEventListener('click', () => {
        input.value = ''; 
        compatibilityScoreContainer.style.visibility = "collapse";
        compatibilityScoreContainer.style.opacity = "0";
        heartImg.style.visibility = "visible"
    })
    
});




