function xmlhttpPost(strURL) {
    var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', strURL, true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
            updatepage(self.xmlHttpReq.responseText);
        }
    }
    self.xmlHttpReq.send(getquerystring());
}

function getquerystring() {
    var form     = document.forms['weisskopf_form'];
    var transition = 'null'
    for(var i=0; i<form.transition.length; i++)
    	if(form.transition[i].checked == true)
    		transition = form.transition[i].value
    var energy = form.energy.value;
    var mass = form.mass.value;
    qstr = 't=' + escape(transition) + '&e=' + escape(energy) + '&m=' + escape(mass);
    return qstr;
}

function updatepage(str){
    document.getElementById("result").innerHTML = str;
}

