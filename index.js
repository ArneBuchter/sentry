

    let colorclick = document.querySelector('.clickme');

    let color = document.querySelector('.colorone');
    let arrOne = ['hej', 'farvel', 'ses', 'snakkes'];
    let showBox = document.querySelector('.show');
    
    colorclick.addEventListener('click', () => {
        
        color.classList.toggle('colortwo');
        
    })
    
    showBox.innerHTML += arrOne;
    
    //foo();

    try {
        throw new ReferenceError('Hello', 'someFile.js', 10)
      } catch (e) {
        console.log(e instanceof ReferenceError)  // true
        console.log(e.message)                    // "Hello"
        console.log(e.name)                       // "ReferenceError"
        console.log(e.fileName)                   // "someFile.js"
        console.log(e.lineNumber)                 // 10
        console.log(e.columnNumber)               // 0
        console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
      }

