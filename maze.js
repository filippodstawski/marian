$(function(){
	
	var person = {
			animation:0,
			animationImg:"stay",
			personDiv: 'player',
			animationTime:0,
			positionX: 0,
			velocity: 6,
			positionY: 20,
			getAnimationTime: function() {return this.animationTime;},
			updateAnimationTime: function() {
					this.animationTime++;
					if(this.animationTime>4){
						this.animation++;
						this.animationTime=0;
					}
					if(this.animation>7){
						this.animation=0;
					}
				},
			updateAnimationImg: function() {
					if(this.animation==0){
						this.animationImg="stay";
					}
					if(this.animation==1){
						this.animationImg="run1";
					}
					if(this.animation==2){
						this.animationImg="run2";
					}
					if(this.animation==3){
						this.animationImg="run3";
					}
					if(this.animation==4){
						this.animationImg="run4";
					}
					if(this.animation==5){
						this.animationImg="run3";
					}
					if(this.animation==6){
						this.animationImg="run2";
					}
					if(this.animation==7){
						this.animationImg="run1";
					}
				},
			restoreAnimationTime: function() {this.animationTime = 0;},
			modifyAnimation: function() {
					this.updateAnimationImg();
					$("#"+this.personDiv).css('background-image','url(player/'+this.animationImg+'.png)');
				}
		};
		
	var player = '<div id="player"></div>';
	$("#map").append(player);
	
	var position = $("#player").position();
	var offset = $("#player").offset();
	
	person.positionY = offset.left;
	person.positionX = offset.top;
	$("#player").offset({ top: person.positionX, left: person.positionY});
	
	$(document).keydown(function(e){
		
		person.updateAnimationTime();
		
		  switch (e.keyCode) {
			case 37: // Left
				person.positionY = person.positionY - person.velocity;
				$("#player").offset({ top: person.positionX, left: person.positionY});
				//$("#player").css('left', position.left - 20 + 'px');
				//Game.player.moveLeft();
				break;

			case 38: // Up
				person.positionX = person.positionX - person.velocity;
				$("#player").offset({ top: person.positionX, left: person.positionY});
				//$("#player").css('top', position.top - 20 + 'px');
				//Game.player.moveUp();
				break;

			case 39: // Right
				person.positionY = person.positionY + person.velocity;
				$("#player").offset({ top: person.positionX, left: person.positionY});
				//$("#player").css('left', position.left + 20 + 'px');
				//Game.player.moveRight();
				break;

			case 40: // Down
				person.positionX = person.positionX + person.velocity;
				$("#player").offset({ top: person.positionX, left: person.positionY});
				//$("#player").css('top', position.top + 20 + 'px');
				//Game.player.moveDown();
				break;
			}
			
		});	
		
	setInterval(function(){ 
		person.modifyAnimation();
	}, 10);
	
});