// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(decive.model);
		$('#disp table td').eq(5).text(decive.cordova);
		$('#disp table td').eq(7).text(decive.platform);
		$('#disp table td').eq(9).text(decive.version);
		$('#disp table td').eq(11).text(decive.uuid);
		document.addEventListener("pause",function(){
			escribehistoria('La app se pausó');
		},false);//pause
		document.addEventListener("resume",function(){
			escribehistoria('La app se reinició');
		},false);//resume
		document.addEventListener("online",function(){
			escribehistoria('La app se conectó a la red');
		},false);//se conecto
		document.addEventListener("onffline",function(){
			escribehistoria('La app se desconectó de la red');
		},false);//se desconecto
	
	},false);// ready device

});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		