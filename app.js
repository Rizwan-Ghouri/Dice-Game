let diceimg = document.getElementById('diceim');
        let dicebtn = document.getElementById('dice');
        dicebtn.setAttribute('class','dice')
        console.log(diceimg);
        function diceFun(){
            let random = Math.floor(Math.random()*6)        
                if(random == 1){
                    diceimg.src = "img/1d.jpg"
                }else if(random == 2){
                    diceimg.src = "img/2d.jpg"  
                }else if(random == 3){
                    diceimg.src = "img/3d.jpg"    
                }else if(random == 4){
                    diceimg.src = "img/4d.jpg"   
                }else if(random == 5){
                    diceimg.src = "img/5d.jpg"   
                }else if(random == 6){
                    diceimg.src = "img/6d.jpg"
                }
                
        }
             dicebtn.addEventListener('click',diceFun)
