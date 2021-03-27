class Game{
    constructor(){

    }
    getState(){
        var gameStateref= database.ref('gameState')
        gameStateref.on('value',function(data){
            gameState= data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState==0){
            player=new Player()
            var playercountref = await database.ref('playerCount').once("value")
            if (playercountref.exists()){
                playerCount = playercountref.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
    car1=createSprite(100,200)
    car1.addImage("car1",c1)
    car2=createSprite(300,200)
    car2.addImage("car2",c2)
    car3=createSprite(500,200)
    car3.addImage("car3",c3)
    car4=createSprite(700,200)
    car4.addImage("car4",c4)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        Player.getplayerinfo()
        if (allplayers != undefined){
            background(rgb(198,135,103))
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0
            var x = 75
            var y;
            for(var plr in allplayers){
                index=index+1
                x=x+200
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if (index==player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if (keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=10
            player.update()
        }
        if(player.distance>3860){
            gameState=2
        player.rank+=1
        Player.updatecarsatend(player.rank)
        }
        drawSprites()
    }
end(){
    console.log("gameover")
    console.log(player.rank)
}
}