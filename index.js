    

    let colorclick = document.querySelector('.clickme');

    let color = document.querySelector('.colorone');
    let arrOne = ['hej', 'farvel', 'ses', 'snakkes'];
    let showBox = document.querySelector('.show');
    
    colorclick.addEventListener('click', () => {
        
        color.classList.toggle('colortwo');
        
    })
    
    showBox.innerHTML += arrOne;

    fetch("https://api.hejmeddig.com/v1/sider", {
        method: "GET"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
         console.log(data); 
        })
    
    //foo();

