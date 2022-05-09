function gameFactory() {
    let getState = gameStateFactory();

    let { wizard, bugStats } = getState();

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let scoreScreen = document.querySelector('.score-screen'); 
    let wizardElement = createWizard(wizard.x, wizard.y);
    
    

    playScreen.appendChild(wizardElement);

    let factory = {
        startScreen, 
        playScreen,
        scoreScreen,
        wizardElement,
        createBug: () => {
            let bugElement = document.createElement('div');
            bugElement.classList.add('bug'); 
            bugElement.style.width = bugStats.width + 'px';
            bugElement.style.height = bugStats.height + 'px';

            // bug position  - make position random every time not fixed 
            bugElement.style.left = playScreen.offsetWidth - bugStats.width + 'px';
            bugElement.style.top = (playScreen.offsetHeight - bugStats.height) * Math.random() + 'px';

           playScreen.appendChild(bugElement);
        }
        
    };

    return factory;
}
function createWizard(posX, posY) {
    let wizardElement = document.createElement('div');
    wizardElement.classList.add('wizard'); 
    wizardElement.style.top = posY + 'px';
    wizardElement.style.left = posX + 'px';

    return wizardElement;

}


