function editElement(ref, match, replace) {
    const text = ref.textContent
    const result = text.split(match).join(replace);

    ref.textContent = result;
}