((d) => {

  let main = d.getElementById('main');
  let follow = d.getElementById('follow');

  main.addEventListener('mousemove', (e) => {
    // This event returns screenX, screenY
    // Shows us where on the screen the mouse is moving.
    const x = e.clientX;
    const y = e.clientY;
    // Needs to be position absolute, so it moves in relation to its parent.
    follow.style.top = `${y}px`;
    follow.style.left = `${x}px`;


  });

})(document)