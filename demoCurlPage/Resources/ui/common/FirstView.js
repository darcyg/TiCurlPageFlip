//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
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
	
	return self;
}

module.exports = FirstView;