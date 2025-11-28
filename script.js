function calculateMissingSide() {
   const A = parseFloat(document.getElementById('side-a').value);   
   const B = parseFloat(document.getElementById('side-b').value);
   const C = parseFloat(document.getElementById('side-c').value);    
    let result = ''; 
    if (!isNaN(A) && !isNaN(B) && isNaN(C)) {
        const sideC = Math.sqrt(A * A + B * B);
        result = `The length of side C is ${sideC.toFixed(2)}`;
    } else if (!isNaN(A) && !isNaN(C) && isNaN(B)) {
        if (C > A) {
            const sideB = Math.sqrt(C * C - A * A);
            result = `The length of side B is ${sideB.toFixed(2)}`;
        } else {
            result = 'Error: Side C must be greater than side A.';
        }
    } else if (!isNaN(B) && !isNaN(C) && isNaN(A)) {
        if (C > B) {
            const sideA = Math.sqrt(C * C - B * B);
            result = `The length of side A is ${sideA.toFixed(2)}`;
        } else {
            result = 'Error: Side C must be greater than side B.';
        }
    } else {
        result = 'Error: Please enter exactly two sides.';
    }
    document.getElementById('result').textContent = result;
} 

function clearFields() {
    document.getElementById('side-a').value = '';
    document.getElementById('side-b').value = '';
    document.getElementById('side-c').value = '';
    document.getElementById('result').textContent = '';
}