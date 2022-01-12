function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iaSQo90Dj/model.json', modelready);
}
function modelready(){
    classifier.classify(gotResults);
}

img = document.getElementById("image");

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2)+ " %";

        var r = Math.floor((Math.random()* 255) + 1);
        g = Math.floor((Math.random()* 255)) + 1;
        b = Math.floor((Math.random()* 255)) + 1;

        document.getElementById("result_label").style.color = "rgb( " + r + "," + g + "," + b + ")"; 
        document.getElementById("result_confidence").style.color = "rgb( " + r + "," + g + "," + b + ")"; 
      
        if(results[0].label == "Background Noise"){
            img.src = "background_noise.png";
        }
        else if(results[0].label == "Background Chirping"){
            img.src = "background_chirping.png";
        }
        else if(results[0].label == "Pigeon"){
            img.src = "pigeon.png";
        }
        else if(results[0].label == "Rabbit"){
            img.src = "rabbit.png";
        }
        else if(results[0].label == "Lion"){
            img.src = "lion.png";
        }
        else if(results[0].label == "Wolf"){
            img.src = "wolf.png";
        }
        else if(results[0].label == "Cat"){
            img.src = "cat.png";
        }
        else if(results[0].label == "Dog"){
            img.src = "dog.png";
        }
        else if(results[0].label == "Peacock"){
            img.src = "peacock.png";
        }
        else if(results[0].label == "Duck"){
            img.src = "duck.png";
        }
        else if(results[0].label == "Myna"){
            img.src = "myna.png";
        }
        else if(results[0].label == "Cow"){
            img.src = "cow.png";
        }
        else if(results[0].label == "Panda"){
            img.src = "panada.png";
        }
        else if(results[0].label == "Parrot"){
            img.src = "parrot.png";
        }
        else if(results[0].label == "Horse"){
            img.src = "horse.png";
        }
        else if(results[0].label == "Sparrow"){
            img.src = "sparrow.png";
        }
        else if(results[0].label == "Rat"){
            img.src = "rat.png";
        }
    }
}