export default function(element, tagName) {
	var parent = element;
	while (parent && parent.nodeType === Node.ELEMENT_NODE) {
		let tn = parent.tagName.toUpperCase();
		if (tn === tagName) {
			return parent;
		}
		parent = parent.parentNode;
	}
	return null;
}
