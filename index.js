    let colorclick = document.querySelector('.clickme');
    const number = 24;
    let color = document.querySelector('.colorone');
    let arrOne = ['hej', 'farvel', 'ses', 'snakkes'];
    let showBox = document.querySelector('.show');
    let one = 1;
    let two = "2";

    let result = one + two;

    console.log(result);
    
    colorclick.addEventListener('click', () => {
        
        color.classList.toggle('colortwo');
        
    })
    
    showBox.innerHTML += arrOne;

    

    // number = 12;
    

    //foo();

