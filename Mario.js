
    
    const mario = document.querySelector('.mario'); /*Aqui localizamos a imagem do mario*/
    const pipe = document.querySelector('.pipe')
    

    function inJump() {
        mario.classList.add('Jump');
    }

    function outJump(){
        mario.classList.remove('Jump')
    }
    
    const jump = () =>{
        inJump();
        setTimeout(outJump, 500)
    };
    document.addEventListener('keyup', jump);


    const loop = setInterval(() =>{
        
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const gameOver = document.querySelector('.gameOver');
        const clouds = document.querySelector('.clouds');
        const cloudsPosition = clouds.offsetLeft;
      

    

        if(pipePosition <= 120  && marioPosition < 80  && pipePosition > 0){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;



            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            gameOver.style.display = 'inline-block'
            gameOver.style.cursor = 'Pointer'
            mario.src = '/Programador/Client-Side/Image/game-over.png'
            mario.style.width = '75px'

            clearInterval(loop);
         
        }

        

    }, 10)
    

    function replay(){
        location.reload();                                                                                                                                                  
    }


    