/**
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('reset').addEventListener('click', resetAll)
	document.getElementById('close').addEventListener('click', closePopup)
	document.getElementById('hashing').addEventListener('change', function () { convert(document.getElementById('hashing').value) })
	document.getElementById('button_eb64').addEventListener('click', function () { convert('eb64') })
	document.getElementById('button_db64').addEventListener('click', function () { convert('db64') })
	document.getElementById('copy').addEventListener('click', copyToClipboard)
	document.getElementById('input').addEventListener('input', updateInput)
})

function base64ToBytes(base64) {
	const binString = atob(base64)
	return Uint8Array.from(binString, (m) => m.codePointAt(0))
}

function bytesToBase64(bytes) {
	const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join("")
	return btoa(binString)
}

function copyToClipboard() {
	navigator.clipboard.writeText(document.getElementById('output').textContent)
}

function resetAll() {
	document.getElementById('input').value = ''
	document.getElementById('output').textContent = ''
	document.getElementById('hashing').options[0].selected = true
}

function updateInput() {
	// TODO check if the select has one option chosen and hash the text again.
	if (document.getElementById('hashing').value !== 'hash_default') {
		convert(document.getElementById('hashing').value)
	} else {
		document.getElementById('output').textContent = ''
	}
}

function closePopup() {
	window.close();
}

function convert(type) {
	if (document.getElementById('input').value == '') {
		document.getElementById('output').textContent = ''
		return
	}
	const inputValue = document.getElementById('input').value
	let dataFromForm = ''

	if (type == 'md5') {
		dataFromForm = hex_md5(inputValue)
	} else if (type == 'sha1') {
		dataFromForm = hex_sha1(inputValue)
	} else if (type == 'sha256') {
		dataFromForm = hex_sha256(inputValue)
	} else if (type == 'sha512') {
		dataFromForm = hex_sha512(inputValue)
	} else if (type == 'ripemd160') {
		dataFromForm = hex_rmd160(inputValue)
	} else if (type == 'eb64') {
		dataFromForm = bytesToBase64(new TextEncoder().encode(inputValue))
		document.getElementById('hashing').options[0].selected = true
	} else if (type == 'db64') {
		dataFromForm = new TextDecoder().decode(base64ToBytes(inputValue))
		document.getElementById('hashing').options[0].selected = true
	}

	document.getElementById('output').textContent = dataFromForm
}