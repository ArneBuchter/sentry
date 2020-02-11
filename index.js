document.addEventListener('DMContentLoaded', function () {

    
    let colorclick = document.querySelector('clickme');
    let color = document.querySelector('.colorone');
    let arrOne = ['hej', 'farvel', 'ses', 'snakkes'];
    let showBox = document.querySelector('.show');
    
    colorclick.addEventListener('click', () => {
        
        color.classList.toggle('colortwo');
        
    })
    
    showBox.innerHTML += arrone;
    
})
