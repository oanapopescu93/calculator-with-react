export const show = (input = "", operation = "") => {
	return{
		type: 'show',
		input: input,
		operation: operation
	}
}
export const reset = () => {
	return{
		type: 'reset',
		value: "",
	}
}