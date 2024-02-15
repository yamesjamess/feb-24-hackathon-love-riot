const compatibilityScoreContainer = document.querySelector('.compatibility-score-container')
const calculateBtn = document.getElementById('calculate-btn')
const compatibilityScoreForm = document.querySelector('.user-input')
const compatibilityPercentage = document.getElementById('compatibility-percentage')
const resetForm = document.querySelector('.fa-rotate-left')
const userAndCrushInputs = document.querySelectorAll('.input')

compatibilityScoreForm.addEventListener('submit', (e) => {
    e.preventDefault()
    compatibilityScoreContainer.style.visibility = "visible";
    compatibilityScoreContainer.style.opacity = "1";
})

userAndCrushInputs.forEach((input) => {
    resetForm.addEventListener('click', () => {
        input.value = ''; 
        compatibilityScoreContainer.style.visibility = "collapse";
        compatibilityScoreContainer.style.opacity = "0";
    })
    
});




