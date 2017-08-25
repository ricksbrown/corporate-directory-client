/**
 * Builds a business entity based on the provided form controls.
 *
 * @param elements Form controls representing entity state.
 * @param [base] If provided the state will be added to this object.
 * @returns {Object} An object representing form state.
 */
export default function(elements, base) {
	// This is basically a form serializer, swap it out for a real one at some point
	var result = base || {};
	for (let i = 0; i < elements.length; i++) {
		let element = elements[i];
		if (element) {
			let field = element.getAttribute("name");
			if (field) {
				result[field] = element.value;
			}
		}
	}
	return result;
}
