export const addition = (nr = 1) => {
	return{
		type: 'addition',
		value: nr
	}
}

export const subtraction = (nr = 1) => {
	return{
		type: 'subtraction',
		value: nr
	}
}

export const multiplication = (nr = 1) => {
	return{
		type: 'multiplication',
		value: nr
	}
}

export const division = (nr = 1) => {
	return{
		type: 'division',
		value: nr
	}
}