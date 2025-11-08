const container = document.getElementById('symbol-bg');
const symbols = ['|', '.'];

function spawnSymbol() {
  const symbol = document.createElement('div');
  symbol.classList.add('symbol');
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * 100 + 'vw';
  symbol.style.top = Math.random() * 100 + 'vh';
  symbol.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
  symbol.style.animationDuration = (Math.random() * 4 + 3) + 's';
  container.appendChild(symbol);

  // Remove after animation completes
  setTimeout(() => symbol.remove(), 6000);
}

// Create a continuous stream of random characters
setInterval(spawnSymbol, 150);