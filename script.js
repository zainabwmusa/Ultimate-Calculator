// --- Navigation and Section Switching ---
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.calc-section');
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(btn.dataset.section).classList.add('active');
    });
});

// --- Dark Mode ---
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    darkModeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    darkModeToggle.textContent = '☀️';
}

// --- Calculator Templates ---
function renderBasicCalculator() {
    return `
        <input type="text" class="calculator-display" id="display" disabled>
        <div class="calculator-buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn operator" data-value="/">&divide;</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn operator" data-value="*">&times;</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn operator" data-value="-">&minus;</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn" id="clear">C</button>
            <button class="btn operator" data-value="+">+</button>
            <button class="btn" id="equals" colspan="4">=</button>
        </div>
    `;
}


// --- Scientific Calculator ---
function renderScientificCalculator() {
    return `
        <input type="text" class="calculator-display" id="sci-display" disabled>
        <div class="calculator-buttons sci-grid">
            <button class="btn" data-value="sin">sin</button>
            <button class="btn" data-value="cos">cos</button>
            <button class="btn" data-value="tan">tan</button>
            <button class="btn" data-value="log">log</button>
            <button class="btn" data-value="sqrt">√</button>
            <button class="btn" data-value="^">xʸ</button>
            <button class="btn" data-value="(">(</button>
            <button class="btn" data-value=")">)</button>
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn operator" data-value="/">÷</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn operator" data-value="*">×</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn operator" data-value="-">−</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn" id="sci-clear">C</button>
            <button class="btn operator" data-value="+">+</button>
            <button class="btn" id="sci-equals" colspan="4">=</button>
        </div>
        <div class="sci-hint">Tip: Use parentheses for functions. log = log₁₀, √ = sqrt(x)</div>
    `;
}

// --- Finance Calculator (Simple Interest) ---
function renderFinanceCalculator() {
    return `
        <div class="finance-cards">
            <div class="finance-card">
                <h4>Simple Interest</h4>
                <input type="number" id="principal" placeholder="Principal ($)">
                <input type="number" id="rate" placeholder="Rate (%)">
                <input type="number" id="time" placeholder="Time (years)">
                <button class="btn" id="finance-calc">Calculate</button>
                <input type="text" class="calculator-display" id="finance-result" placeholder="Interest" disabled>
            </div>
            <div class="finance-card">
                <h4>Loan EMI</h4>
                <input type="number" id="emi-principal" placeholder="Principal ($)">
                <input type="number" id="emi-rate" placeholder="Rate (%/yr)">
                <input type="number" id="emi-time" placeholder="Time (years)">
                <button class="btn" id="emi-calc">Calculate</button>
                <input type="text" class="calculator-display" id="emi-result" placeholder="EMI" disabled>
            </div>
        </div>
    `;
}

// --- Math Tools (Area of Circle) ---
function renderMathCalculator() {
    return `
        <div class="math-cards">
            <div class="math-card">
                <h4>Area of Circle</h4>
                <input type="number" id="circle-radius" placeholder="Radius">
                <button class="btn" id="area-calc">Calculate</button>
                <input type="text" class="calculator-display" id="area-result" placeholder="Area" disabled>
            </div>
            <div class="math-card">
                <h4>Area of Rectangle</h4>
                <input type="number" id="rect-width" placeholder="Width">
                <input type="number" id="rect-height" placeholder="Height">
                <button class="btn" id="rect-calc">Calculate</button>
                <input type="text" class="calculator-display" id="rect-result" placeholder="Area" disabled>
            </div>
            <div class="math-card">
                <h4>Area of Triangle</h4>
                <input type="number" id="tri-base" placeholder="Base">
                <input type="number" id="tri-height" placeholder="Height">
                <button class="btn" id="tri-calc">Calculate</button>
                <input type="text" class="calculator-display" id="tri-result" placeholder="Area" disabled>
            </div>
        </div>
    `;
}

// --- Custom Tools (Love Calculator, GPA, Grade Average) ---
function renderCustomCalculator() {
    return `
        <div class="custom-cards">
            <div class="custom-card">
                <h4>Love Calculator 😄</h4>
                <input type="text" id="love-name1" placeholder="Your Name">
                <input type="text" id="love-name2" placeholder="Their Name">
                <button class="btn" id="love-calc">Calculate</button>
                <input type="text" class="calculator-display" id="love-result" placeholder="Love %" disabled>
            </div>
            <div class="custom-card">
                <h4>GPA Average</h4>
                <input type="number" id="gpa1" placeholder="GPA 1">
                <input type="number" id="gpa2" placeholder="GPA 2">
                <input type="number" id="gpa3" placeholder="GPA 3">
                <button class="btn" id="gpa-calc">Calculate</button>
                <input type="text" class="calculator-display" id="gpa-result" placeholder="GPA Avg" disabled>
            </div>
            <div class="custom-card">
                <h4>Grade Average</h4>
                <input type="number" id="grade1" placeholder="Grade 1">
                <input type="number" id="grade2" placeholder="Grade 2">
                <input type="number" id="grade3" placeholder="Grade 3">
                <button class="btn" id="grade-calc">Calculate</button>
                <input type="text" class="calculator-display" id="grade-result" placeholder="Grade Avg" disabled>
            </div>
        </div>
    `;
}

// Render calculators on page load
document.getElementById('basic-calculator').innerHTML = renderBasicCalculator();
document.getElementById('scientific-calculator').innerHTML = renderScientificCalculator();
document.getElementById('finance-calculator').innerHTML = renderFinanceCalculator();
document.getElementById('math-calculator').innerHTML = renderMathCalculator();
document.getElementById('custom-calculator').innerHTML = renderCustomCalculator();

// --- Scientific Calculator Logic ---
let sciInput = '';
const sciDisplay = document.querySelector('#scientific-calculator #sci-display');
const sciButtons = document.querySelectorAll('#scientific-calculator .btn');
sciButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'sci-clear') {
            sciInput = '';
            sciDisplay.value = '';
        } else if (button.id === 'sci-equals') {
            try {
                let expr = sciInput
                    .replace(/\^/g, '**')
                    .replace(/sin\(([^)]+)\)/g, (_, x) => `Math.sin((${x})*Math.PI/180)`)
                    .replace(/cos\(([^)]+)\)/g, (_, x) => `Math.cos((${x})*Math.PI/180)`)
                    .replace(/tan\(([^)]+)\)/g, (_, x) => `Math.tan((${x})*Math.PI/180)`)
                    .replace(/log\(([^)]+)\)/g, (_, x) => `Math.log10(${x})`)
                    .replace(/sqrt\(([^)]+)\)/g, (_, x) => `Math.sqrt(${x})`);
                let result = eval(expr).toString();
                sciDisplay.value = result;
                sciInput = result;
            } catch {
                sciDisplay.value = 'Error';
                sciInput = '';
            }
        } else if (["sin","cos","tan","log","sqrt"].includes(value)) {
            sciInput += value + '(';
            sciDisplay.value = sciInput;
        } else {
            sciInput += value || '';
            sciDisplay.value = sciInput;
        }
    });
});

// --- Finance Calculator Logic (Simple Interest) ---
// --- Finance Calculator Logic (Simple Interest & EMI) ---
document.getElementById('finance-calc').addEventListener('click', () => {
    const p = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value);
    const t = parseFloat(document.getElementById('time').value);
    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        document.getElementById('finance-result').value = 'Invalid';
        return;
    }
    const interest = (p * r * t) / 100;
    document.getElementById('finance-result').value = interest.toFixed(2);
});
// EMI Calculator
document.getElementById('emi-calc').addEventListener('click', () => {
    const p = parseFloat(document.getElementById('emi-principal').value);
    const r = parseFloat(document.getElementById('emi-rate').value) / 1200;
    const n = parseFloat(document.getElementById('emi-time').value) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || n === 0) {
        document.getElementById('emi-result').value = 'Invalid';
        return;
    }
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById('emi-result').value = emi ? emi.toFixed(2) : 'Invalid';
});

// --- Math Tools Logic (Area of Circle) ---
// --- Math Tools Logic ---
// Area of Circle
document.getElementById('area-calc').addEventListener('click', () => {
    const r = parseFloat(document.getElementById('circle-radius').value);
    if (isNaN(r)) {
        document.getElementById('area-result').value = 'Invalid';
        return;
    }
    const area = Math.PI * r * r;
    document.getElementById('area-result').value = area.toFixed(2);
});
// Area of Rectangle
document.getElementById('rect-calc').addEventListener('click', () => {
    const w = parseFloat(document.getElementById('rect-width').value);
    const h = parseFloat(document.getElementById('rect-height').value);
    if (isNaN(w) || isNaN(h)) {
        document.getElementById('rect-result').value = 'Invalid';
        return;
    }
    const area = w * h;
    document.getElementById('rect-result').value = area.toFixed(2);
});
// Area of Triangle
document.getElementById('tri-calc').addEventListener('click', () => {
    const b = parseFloat(document.getElementById('tri-base').value);
    const h = parseFloat(document.getElementById('tri-height').value);
    if (isNaN(b) || isNaN(h)) {
        document.getElementById('tri-result').value = 'Invalid';
        return;
    }
    const area = 0.5 * b * h;
    document.getElementById('tri-result').value = area.toFixed(2);
});

// --- Custom Tools Logic ---
// Love Calculator
document.getElementById('love-calc').addEventListener('click', () => {
    const n1 = document.getElementById('love-name1').value.trim();
    const n2 = document.getElementById('love-name2').value.trim();
    if (!n1 || !n2) {
        document.getElementById('love-result').value = 'Enter names';
        return;
    }
    // Fun random love percentage
    const percent = ((n1.length * n2.length * (n1.charCodeAt(0) + n2.charCodeAt(0))) % 100) + 1;
    document.getElementById('love-result').value = percent + '%';
});
// GPA Average
document.getElementById('gpa-calc').addEventListener('click', () => {
    const g1 = parseFloat(document.getElementById('gpa1').value);
    const g2 = parseFloat(document.getElementById('gpa2').value);
    const g3 = parseFloat(document.getElementById('gpa3').value);
    if ([g1,g2,g3].some(isNaN)) {
        document.getElementById('gpa-result').value = 'Invalid';
        return;
    }
    const avg = (g1 + g2 + g3) / 3;
    document.getElementById('gpa-result').value = avg.toFixed(2);
});
// Grade Average
document.getElementById('grade-calc').addEventListener('click', () => {
    const g1 = parseFloat(document.getElementById('grade1').value);
    const g2 = parseFloat(document.getElementById('grade2').value);
    const g3 = parseFloat(document.getElementById('grade3').value);
    if ([g1,g2,g3].some(isNaN)) {
        document.getElementById('grade-result').value = 'Invalid';
        return;
    }
    const avg = (g1 + g2 + g3) / 3;
    document.getElementById('grade-result').value = avg.toFixed(2);
});

// --- Basic Calculator Logic ---
let currentInput = '';
const display = document.querySelector('#basic-calculator #display');
const buttons = document.querySelectorAll('#basic-calculator .btn');
let history = [];

function updateDisplay(val) {
    display.value = val;
}

function addToHistory(expr, result) {
    history.push({ expr, result });
    const li = document.createElement('li');
    li.textContent = `${expr} = ${result}`;
    document.getElementById('history-list').appendChild(li);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
            currentInput = '';
            updateDisplay('');
        } else if (button.id === 'equals') {
            try {
                const result = eval(currentInput).toString();
                addToHistory(currentInput, result);
                currentInput = result;
                updateDisplay(result);
            } catch {
                updateDisplay('Error');
                currentInput = '';
            }
        } else {
            currentInput += value || '';
            updateDisplay(currentInput);
        }
    });
});

// --- Keyboard Input Support ---
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('basic').classList.contains('active')) return;
    if ((e.key >= '0' && e.key <= '9') || '+-*/.'.includes(e.key)) {
        currentInput += e.key;
        updateDisplay(currentInput);
    } else if (e.key === 'Enter') {
        try {
            const result = eval(currentInput).toString();
            addToHistory(currentInput, result);
            currentInput = result;
            updateDisplay(result);
        } catch {
            updateDisplay('Error');
            currentInput = '';
        }
    } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
        currentInput = '';
        updateDisplay('');
    } else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    }
});

// --- Share Button ---
document.getElementById('shareBtn').addEventListener('click', () => {
    if (display.value) {
        navigator.clipboard.writeText(display.value);
        alert('Result copied to clipboard!');
    }
});

// --- Save as PDF (Summary) ---
document.getElementById('saveBtn').addEventListener('click', () => {
    const summary = history.map(h => `${h.expr} = ${h.result}`).join('\n');
    const blob = new Blob([summary], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'calculator_history.txt';
    link.click();
});
