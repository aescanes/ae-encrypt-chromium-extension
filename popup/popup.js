/**
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('close').addEventListener('click', cleanAll)
	document.getElementById('button_md5').addEventListener('click', function () { convert('md5') })
	document.getElementById('button_sha1').addEventListener('click', function () { convert('sha1') })
	document.getElementById('button_sha256').addEventListener('click', function () { convert('sha256') })
	document.getElementById('button_sha512').addEventListener('click', function () { convert('sha512') })
	document.getElementById('button_ripemd160').addEventListener('click', function () { convert('ripemd160') })
	document.getElementById('button_eb64').addEventListener('click', function () { convert('eb64') })
	document.getElementById('button_db64').addEventListener('click', function () { convert('db64') })
	document.getElementById('copy').addEventListener('click', copyToClipboard)
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

function cleanAll() {
	document.getElementById('input').value = ''
	document.getElementById('output').textContent = ''
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
	} else if (type == 'db64') {
		dataFromForm = new TextDecoder().decode(base64ToBytes(inputValue))
	}

	document.getElementById('output').textContent = dataFromForm
}