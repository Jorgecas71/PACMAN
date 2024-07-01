
let pacmanX = 0;
let pacmanY = 0;


function movePacman() {

    window.addEventListener('keydown', function (e) {
        switch (e.key) {
            case 'ArrowUp':
                pacmanY -= 10;
                break;
            case 'ArrowDown':
                pacmanY += 10;
                break;
            case 'ArrowLeft':
                pacmanX -= 10;
                break;
            case 'ArrowRight':
                pacmanX += 10;
                break;
        }

     
        pacman.style.left = pacmanX + 'px';
        pacman.style.top = pacmanY + 'px';
    });
}

window.onload = function () {
    movePacman();
}
