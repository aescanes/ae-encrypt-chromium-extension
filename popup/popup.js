/**
 * AE Encrypt functionalities
 */

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('reset').addEventListener('click', resetAll)
	document.getElementById('close').addEventListener('click', closePopup)
	document.getElementById('hashing').addEventListener('change', function () { convertInputToOutput(document.getElementById('hashing').value) })
	document.getElementById('button_eb64').addEventListener('click', function () { convertInputToOutput('eb64') })
	document.getElementById('button_db64').addEventListener('click', function () { convertInputToOutput('db64') })
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
	if (document.getElementById('hashing').value !== 'hash_default') {
		convertInputToOutput(document.getElementById('hashing').value)
	} else {
		document.getElementById('output').textContent = ''
	}
}

function closePopup() {
	window.close();
}

function convertInputToOutput(type) {
	if (document.getElementById('input').value == '') {
		document.getElementById('output').textContent = ''
		return
	}

	const inputValue = document.getElementById('input').value
	const outputValue = hashingOrEncondingInputValue(type, inputValue)

	if (type == 'eb64' || type == 'db64') {
		document.getElementById('hashing').options[0].selected = true
	}

	document.getElementById('output').textContent = outputValue
}

function hashingOrEncondingInputValue(type, inputValue) {
	let outputValue = ''
	if (type == 'md5') {
		outputValue = hex_md5(inputValue)
	} else if (type == 'sha1') {
		outputValue = hex_sha1(inputValue)
	} else if (type == 'sha256') {
		outputValue = hex_sha256(inputValue)
	} else if (type == 'sha512') {
		outputValue = hex_sha512(inputValue)
	} else if (type == 'ripemd160') {
		outputValue = hex_rmd160(inputValue)
	} else if (type == 'eb64') {
		outputValue = bytesToBase64(new TextEncoder().encode(inputValue))
	} else if (type == 'db64') {
		outputValue = new TextDecoder().decode(base64ToBytes(inputValue))
	}

	return outputValue
}

module.exports = { base64ToBytes, bytesToBase64, hashingOrEncondingInputValue }