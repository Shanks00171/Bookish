document.addEventListener('click', e=>{
	const isDropDownButton = e.target.matches('[data-drop-down]')
	if(!isDropDownButton && e.target.closest('[drop-down]')!= null) return

	let currentDrop
	if(isDropDownButton){
		currentDrop = e.target.closest('[drop-down]')
		currentDrop.classList.toggle('active')
	}

	document.querySelectorAll('[drop-down].active').forEach(dropdown=>{
		if(dropdown==currentDrop) return
		dropdown.classList.remove('active')
	})
})