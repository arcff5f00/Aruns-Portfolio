document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('nav a');
  const logo = document.querySelector('.logo');

  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.color = '#E9E8E4';
      item.style.border = '2px solid #E9E8E4';

      // Make other items grey
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.style.color = '#504E4A';
        }
      });
    });

    item.addEventListener('mouseout', () => {
      // Revert styles for the hovered item
      item.style.color = '#E9E8E4';
      item.style.border = '2px solid transparent';

      // Revert styles for other items
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.style.color = '#E9E8E4';
        }
      });
    });
  });

  // Add click event for the logo
  if (logo) {
    logo.addEventListener('click', function () {
      // Set the window location to the home page or refresh the page
      window.location.href = 'index.html';
      // Alternatively, use window.location.reload(true) to force a reload
    });
  }


  const helloText = document.querySelector('.hello-text');

  const greetings = [
    'ನಮಸ್ಕಾರ,', 'Hallo,', 'Bonjour,', 'नमस्ते,', 'Ciao,', '안녕하세요,', 'こんにちは,'
  ];

  let index = 0;

  function changeHelloText() {
    helloText.style.opacity = 0;

    setTimeout(() => {
      helloText.textContent = greetings[index];
      helloText.style.opacity = 1;
      index = (index + 1) % greetings.length;
    }, 500); // Adjust the duration as needed
  }

  setInterval(changeHelloText, 2000); 


const shineElement = document.getElementById('shine');

  if (shineElement) {
    document.addEventListener('mousemove', function (event) {
      // Update shine element position based on mouse coordinates
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      shineElement.style.left = `${mouseX - shineElement.offsetWidth / 2}px`;
      shineElement.style.top = `${mouseY - shineElement.offsetHeight / 2}px`;

      // Show the shine element
      shineElement.style.opacity = 1;

      // Optional: Hide the shine element after a short delay
      setTimeout(() => {
        shineElement.style.opacity = 1;
      }, 200);
    });
  }



  const downIcon = document.getElementById('downIcon');
  const tooltipTextDown = document.querySelector('.tooltip-text-down');

  if (downIcon && tooltipTextDown) {
    downIcon.addEventListener('mouseover', () => {
      tooltipTextDown.style.visibility = 'visible';
      tooltipTextDown.style.opacity = 1;
    });

    downIcon.addEventListener('mouseout', () => {
      tooltipTextDown.style.visibility = 'hidden';
      tooltipTextDown.style.opacity = 0;
    });
  }

});
