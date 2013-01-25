//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label1 = Ti.UI.createLabel({
		color:'#00FF00',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label1);
	
	// var label2= Ti.UI.createLabel({
		// color:'#0000FF',
		// text:"findResID",
		// height:'auto',
		// width:'auto'
	// });
	// self.add(label2);

	//Add behavior for UI
	label1.addEventListener('click', function(e) {
		//alert(e.source.text);		
		var curlpageflip = require('com.visusway.mod.curlpageflip');
		curlpageflip.openBook({
			success:function(data) {
		    	alert(JSON.stringify(data));
			},
			error:function(err) { 
    			alert("Error!! " + err); 
  			},
  			cancel:function() { 
    			alert("cancel"); 
			}
		});
	});
	
	// label2.addEventListener('click', function(e) {
		// var curlpageflip = require('com.visusway.mod.curlpageflip');
		// alert("layout.main : "+curlpageflip.findResID("layout.main"));
		// alert("id.curl : "+curlpageflip.findResID("id.curl"));
		// alert("drawable.obama : "+curlpageflip.findResID("drawable.obama"));
		// alert("drawable.road_rage : "+curlpageflip.findResID("drawable.road_rage"));
		// alert("drawable.taipei_101 : "+curlpageflip.findResID("drawable.taipei_101"));
		// alert("drawable.world : "+curlpageflip.findResID("drawable.world"));
	// });
	
	return self;
}

module.exports = FirstView;