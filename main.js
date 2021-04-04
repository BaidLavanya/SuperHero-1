var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImg_width = 30;
blockImg_height = 30;

var playerObj = "";
var blockImg_object = "";

function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img){
    playerObj = Img;
    
    playerObj.scaleToWidth(150);
    playerObj.scaleToHeight(140);
    playerObj.set({
        top:playerY,
        left:playerX
    });
    canvas.add(playerObj);
    });
} 

function newImg(getImg)
{
    fabric.Image.fromURL(getImg, function(Img){
    blockImg_Obj = Img;
    
    blockImg_Obj.scaleToWidth(blockImg_width);
    blockImg_Obj.scaleToHeight(blockImg_height);
    blockImg_Obj.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImg_Obj);
    });
} 