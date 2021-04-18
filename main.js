canvas= new fabric.Canvas("myCanvas");



block_height = 30;
block_width = 30;

player_x = 10;
player_y = 10;

player_object = "";
block_object = "";

function update_player() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);

    });

}

function update_blocks(block) {
    fabric.Image.fromURL(block, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (e.shiftKey == true && keyPress == "80") {

        console.log("shift and p pressed")

        block_width = block_width + 10;
        block_height = block_height + 10;

        document.getElementById("currentWidth").innerHTML = block_width;
        document.getElementById("currentHeight").innerHTML = block_height;
    }

    if (e.shiftKey == true && keyPress == "77") {
        if (block_width > 0 && block_height > 0) {
            console.log("shift and m pressed")

            block_width = block_width - 10;
            block_height = block_height - 10;

            document.getElementById("currentWidth").innerHTML = block_width;
            document.getElementById("currentHeight").innerHTML = block_height;

        }
    }

    if (keyPress == "38") {
        console.log("up")
        up();

    }

    if (keyPress == "40") {
        console.log("down")
        down();

    }

    if (keyPress == "37") {
        console.log("left")
        left();

    }

    if (keyPress == "39") {
        console.log("right")
        right();
   
    }

   if(keyPress=="70"){
        console.log("f");
        
        face_pictures=["hulk_face.png", "ironman_face.png", "spiderman_face.png", "thor_face.png"];
        random= Math.floor(Math.random()*4);

        face= face_pictures[random];

     update_blocks(face);
    } 


    if(keyPress=="66"){
        console.log("b");

        body_pictures=["hulkd_body.png", "ironman_body.png", "spiderman_body.png"];
        random= Math.floor(Math.random()*3);

        body= body_pictures[random];

     update_blocks(body);
    }


    if(keyPress=="76"){
        console.log("l");

        legs_pictures=["hulk_legs.png", "ironman_legs.png", "spiderman_legs.png"];
        random= Math.floor(Math.random()*3);

        legs= legs_pictures[random];

     update_blocks(legs);
    }


    if(keyPress=="82"){
        console.log("r");

        right_hand_pictures=["hulk_left_hand.png", "ironman_left_hand.png", "spiderman_left_hand.png", "thor_left_hand.png"];
        random= Math.floor(Math.random()*3);

        right_hand= right_hand_pictures[random];

     update_blocks(right_hand);
    }

    
    if(keyPress=="72"){
        console.log("h");

        left_hand_pictures=["hulk_right_hand.png", "ironman_right_hand.png", "spiderman_right_hand.png", "thor_right_hand.png"];
        random= Math.floor(Math.random()*3);

        left_hand= left_hand_pictures[random];

     update_blocks(left_hand);
    }
    

}








