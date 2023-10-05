function findDulicate() {
    const textarea = document.getElementById('textarea').value.toLowerCase();
    const textfield = document.getElementById('input').value.toLowerCase()
    const result = document.querySelector('.result')

    var count = 0;
    var index = textarea.indexOf(textfield);
    if(textarea !== '' && textfield !== '') {
        while (index !== -1) {
            count++;
            index = textarea.indexOf(textfield, index + 1);
        }
    }

    result.textContent = "Số lần xuất hiện của từ '" + textfield + "' trong đoạn văn là: " + count

}