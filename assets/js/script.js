const compatibilityScoreContainer = document.querySelector('.compatibility-score-container')
const calculateBtn = document.getElementById('calculate-btn')
const compatibilityScoreForm = document.querySelector('.user-input')
const compatibilityPercentage = document.getElementById('compatibility-percentage')
// Dummy score 
let compatibilityScore = 76

compatibilityScoreForm.addEventListener('submit', (e) => {
    e.preventDefault()
    compatibilityScoreContainer.style.visibility = "visible";
    compatibilityScoreContainer.style.opacity = "1";
})


