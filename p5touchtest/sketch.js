function setup() {
    createCanvas(windowWidth, windowHeight);
    
  
}

function draw() {
  
background(200, 50); //50 è l'opacità

    
var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093',
                 '#ffe2e6',
                 '#6eb66d',
                 '#ffa960',
                 '#2b61ce',
                 '#c496d7',
                 '#6faaec',
                 '#fea24d'
                 ];
        //define a list of color to assign to each touching point
    
    
    for(var i = 0; i < touches.lenght; i++) {
        var touch = touches[i];
        
        
        //The variable touches è di default in P5. The list of touch points: touches[]. we will create a for cicle and we set the fill according with the index of the fingers
        
        var touchColor = colorList[i];
        
        fill(touchColor);
        
        ellipse(touch.x, touch.y, 150);
            //la sintassi del touch è diversa perchè è un oggetto con tante proprietà:min 2 ovvero le posizioni X e Y. cicle for var i è il nome della variabile scelto da noi. la var inizia da zero fino alla lunghezza della variabile e incrementa di uno */
        

    }

}