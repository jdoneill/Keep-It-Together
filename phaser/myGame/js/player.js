function Player (game, key, frame) {
	Phaser.Sprite.call(this, game, 400, 0, key, frame);
	
	this.anchor.set(0.5);
	this.scale.setTo(2, 2);
	
	game.physics.enable(this);
	this.body.immovable = false;

	var canJump = false;
	
	limbs = game.add.group(); // gotta have a ground to stand on
	limbs.enableBody = true; // gotta make the ground stand on-able
	
	if(rArmOn == true){
    rArm = limbs.create(this.body.x, this.body.y, 'guy', 'armR'); //add right armL
    rArm.scale.setTo(1, 1.5);
	}
	if(lArmOn == true){
	lArm = limbs.create(this.body.x - 77, this.body.y, 'guy', 'armL'); //add left armL
	lArm.scale.setTo(1, 1.5);
	}
	if(rLegOn == true){
	rLeg = limbs.create(this.body.x - 20, this.body.y + 40, 'guy', 'legR'); //add right legL
    rLeg.scale.setTo(1, 1.5);
	}
	if(lLegOn == true){
	lLeg = limbs.create(this.body.x - 50, this.body.y + 40, 'guy', 'legL'); //add left leg
    lLeg.scale.setTo(1, 1.5);
	}

		game.physics.arcade.enable(this); // add physics to the playa
		this.body.gravity.y = 450; // change this to a var for water level gravity change
<<<<<<< HEAD
		this.body.collideWorldBounds = false; // don't fall through the earth (changing this after we get platform collision)

	game.camera.follow(player, 800, 500);
=======
		this.body.collideWorldBounds = true; // don't fall through the earth
>>>>>>> 7db71082a24919c728b061c1b5dd61826128a84d

	}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
	
	var cursors = game.input.keyboard.createCursorKeys();
	
<<<<<<< HEAD
		rArm.x = player.x + 32;
		rArm.y = player.y;
=======
/* 	if(level == 1 && rArmOn == true){
		if(Phaser.Keyboard.SPACEBAR.isDown){//spacebar is pressed remove limb
			rArmOn = false;
		}
	}
	else{ */
		rArm.x = player.x + 32;
		rArm.y = player.y;
	//}
>>>>>>> 7db71082a24919c728b061c1b5dd61826128a84d
		
		lArm.x = player.x - 41;
		lArm.y = player.y;
		
		rLeg.x = player.x + 17;
		rLeg.y = player.y + 42;
		
		lLeg.x = player.x - 24;
		lLeg.y = player.y + 42;
<<<<<<< HEAD
=======
	//}
>>>>>>> 7db71082a24919c728b061c1b5dd61826128a84d

	if(lLegOn != true){//no limbs
		this.body.setSize(32,53,0,0);
		playerVel = 50; //decrease velocity
	}
	else if(rLegOn != true){//no right legL
		this.body.setSize(32,67,0,0);//same as no arms
		playerVel = 70; //decrease velocity
	}
	else if(lArmOn != true){// no arms
		this.body.setSize(32,67,0,0);
		playerVel = 90; //decrease velocity
	}
	else if(rArmOn != true){// no right armL
		this.body.setSize(38,67,-6,0);
		playerVel = 110; //decrease velocity
	}
	else{//all limbs
		this.body.setSize(43,67,-6,0);
		playerVel = 150 //set velocity
	}
	
	// P L A Y E R  M O V E M E N T
	// J U M P
	if(cursors.up.isDown && player.body.touching.down)
    	{ //press up to jump (taken from phaser.io example code)
    		if(canJump == true)
        	{
<<<<<<< HEAD
        		player.body.velocity.y = -330;
=======
        		player.body.velocity.y = -420;
>>>>>>> 7db71082a24919c728b061c1b5dd61826128a84d
        		console.log('jump');
			canJump = false;
			}
    	}
    	// makes it so you have to press up each time you want to jump
    	if(cursors.up.isUp)
    	{
        	canJump = true;
    	}
	
	// W A L K I N G
	if (cursors.left.isDown){
		//  go left
		player.body.velocity.x = -playerVel;
	}
	
	else if (cursors.right.isDown){
		//  go right
		player.body.velocity.x = playerVel;
	}
	
	else {
		//  don't move
		player.body.velocity.x = 0;
	}
	
<<<<<<< HEAD
	//game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this);
	
	// L I M B  C O N T R O L
	/* if (Phaser.Keyboard.A.isDown){
		//  go left
		limb.body.velocity.x = -playerVel;
	}
	
	else if (Phaser.Keyboard.D.isDown){
		//  go right
		limb.body.velocity.x = playerVel;
	}
	
	else {
		//  don't move
		limb.body.velocity.x = 0;
	} */
	
}

// outside of the update loop
	function limbDetach (player, limb, limbOn) {
	//detach limbs
	limbOn = false;
	limb.body.gravity.y = 450;
	
	
}




=======
}
>>>>>>> 7db71082a24919c728b061c1b5dd61826128a84d
