function Player (game, key, frame) {
	Phaser.Sprite.call(this, game, 400, 0, key, frame);
	
	this.anchor.set(0.5);
	this.scale.setTo(2, 2);
	
	game.physics.enable(this);
	this.body.immovable = false;

	limbs = game.add.group(); // gotta have a ground to stand on
	limbs.enableBody = true; // gotta make the ground stand on-able
	
    rArm = limbs.create(this.body.x, this.body.y, 'guy', 'armR'); // make some platforms
    rArm.scale.setTo(1, 1.5);
	lArm = limbs.create(this.body.x - 77, this.body.y, 'guy', 'armL'); // make some platforms
    lArm.scale.setTo(1, 1.5);
	rLeg = limbs.create(this.body.x - 20, this.body.y + 40, 'guy', 'legR'); // make some platforms
    rLeg.scale.setTo(1, 1.5);
	lLeg = limbs.create(this.body.x - 50, this.body.y + 40, 'guy', 'legL'); // make some platforms
    lLeg.scale.setTo(1, 1.5);
	this.body.setSize(40,67,-5,0);
	/*
	ledge = platforms.create(-50, 200, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(50, 530, 'ground');
	ledge.scale.setTo(.5, .5);
    ledge.body.immovable = true;
    ledge = platforms.create(423, 175, 'ground');
	ledge.scale.setTo(1, 1.5);
    ledge.body.immovable = true;
    ledge = platforms.create(250, 300, 'ground');
	ledge.scale.setTo(.5, 1);
    ledge.body.immovable = true;
	*/
	
		game.physics.arcade.enable(this); // add physics to the playa
		this.body.gravity.y = 450; // succumb to gravity mortal fool
		this.body.collideWorldBounds = true; // don't fall through the earth

	
	}
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
	
	var cursors = game.input.keyboard.createCursorKeys();
	
	/*
	if(cursors.){
	//spacebar is pressed remove limb
	
	}
	
	else{
		*/
		limbs.x = player.x - 367;
		limbs.y = player.y;
	//}
	
	if(cursors.up.isDown && player.body.onFloor()){ //press up to jump (taken from phaser.io example code)
		player.body.velocity.y = -250;
		console.log('jump');
	}
	
	if (cursors.left.isDown){
		//  go left
		player.body.velocity.x = -150;
	}
	
	else if (cursors.right.isDown){
		//  go right
		player.body.velocity.x = 150;
	}
	
	else {
		//  go right
		player.body.velocity.x = 0;
	}
	
}


