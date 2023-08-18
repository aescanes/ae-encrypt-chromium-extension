// Copyright (c) 2012 aescanes
// 2012/07/03

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('close').addEventListener('click', cleanAll);
    document.getElementById('button_md5').addEventListener('click', function(){convert('md5')});
    document.getElementById('button_sha1').addEventListener('click', function(){convert('sha1')});
    document.getElementById('button_sha256').addEventListener('click', function(){convert('sha256')});
    document.getElementById('button_sha512').addEventListener('click', function(){convert('sha512')});
    document.getElementById('button_ripemd160').addEventListener('click', function(){convert('ripemd160')});
    document.getElementById('button_eb64').addEventListener('click', function(){convert('eb64')});
    document.getElementById('button_db64').addEventListener('click', function(){convert('db64')});
});

function cleanAll() {
	document.getElementById('from').value = '';
	document.getElementById('dataFormatTo').textContent = '';
}

function convert(type) {
	if(document.getElementById('from').value == ''){
		document.getElementById('dataFormatTo').textContent = '';
		return;
	}
	if(type == 'md5'){		
		var dataFromForm = hex_md5(document.getElementById('from').value);	
	}else if(type == 'sha1'){
		var dataFromForm = hex_sha1(document.getElementById('from').value);	
	}else if(type == 'sha256'){
		var dataFromForm = hex_sha256(document.getElementById('from').value);	
	}else if(type == 'sha512'){
		var dataFromForm = hex_sha512(document.getElementById('from').value);	
	}else if(type == 'ripemd160'){
		var dataFromForm = hex_rmd160(document.getElementById('from').value);	
	}else if(type == 'eb64'){
		var dataFromForm = encode64(document.getElementById('from').value);	
	}else if(type == 'db64'){
		var dataFromForm = decode64(document.getElementById('from').value);	
	}			
	
	document.getElementById('dataFormatTo').textContent = dataFromForm;
}