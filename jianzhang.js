function click() { 
	$("div[class='popup-btn-ctnr t-center']")[0].childNodes[0].click();
	$("button[class='bl-button btn bl-button--primary bl-button--size']").click(); 
	$("button[class='bl-button bl-button--primary bl-button--size']").click(); 
} 
function run() { 
	$('.next-loading').click(); 
	$("div[role='alertdialog']").css("display","none");
	setTimeout(click, 1000); 
	setTimeout(run, 1000); 
}; 
run();