const search = d.getElementByID('search');

search.addEventListener('keydown', (e) => {
    // will log the each key
    console.log(e.key);
});

// What is 'e'?
// THe event variable is this object:
KeyboardEvent {
    // Were they holding down the alt key?    
    altKey: false,
    // Were they holding down the shift key?
    shiftKey: false,
    // The key we got
    code: 'space'
    // The keycode of the key we pressed
}

search.addEventListener('keydown', (e) => {
    // will usually submit when pressing enter
    // this prevents it though
    // Be careful when using it though, we don't usually want to stop the user's default interaction with the web
    e.preventDefault();

    if (e.key !== 'Enter') {
        // This is called 'exiting early'
        // End up with multiple exit points from the function causing it to be more difficult to understand.
        return;
    }    
    if (search.value.length > 5) {
        search.style.background = 'pink';
    }
    else {
        search.style.background = '';
    }

    // will log the each key
    console.log(e.key);
    // Named keys start with capitals always eg. Enter, Space (need to be careful of this!)
});

search.addEventListener('keydown', listener);
search.addEventListener('blur', listener);
search.addEventListener('focus', listener);


// EVENT BUBBLING

// Useful for checking coordinates of a click, good for game making!
d.body.addEventListener('click', (e) => {

    // finds any element within the body, (always the thing the user actually clicked on)
    console.log(e.target);
    // will only return the body (always the thing you added the event listener to)
    console.log(e.currentTarget);

});

// This is a way of having one event listener for lots of different things.

const footer = d.querySelector('footer');
footer.addEventListener('click', (e) => {
    
    // Uppercase version of what the tag is!
    // SPAN, DIV, A etc.
    if(e.target.tagName === 'A'){

    }
    if(e.target.matches('a')){

    }

    // search by class
    if(e.target.matches('.external')){

    }    
});

const section = d.querySelector('section');
section.addEventListener('click', (e) => {
    
    // Will only apply the background to the buttons in the selemtn.
    if (e.target.matches('button')) {        
        e.target.style.background = 'red';
    }
})

const cards = d.querySelector('.cards');
cards.addEventListener('click', (e) => {
    
    // exit early if we didn't click on a button
    if(!e.target.matches('button')){
        return;
    }


    e.composedPath()
    // Returns an array, 0 is the element we clicked on.
    // 1 ~ is its parent, then its parent and so on
    // finally even the Window!
    const ancestors = e.composedPath();
    
    if(ancestors.some((elem) => elem.matches('.disabled'))){
        alert("don't click me");
    }
    // This may give an error as the window won't have 'matches' property.

    const isDisabled = ancestors.some((elem) => {
        if(elem.matches){
            return elem.matches('.disabled');
        }
    })

    if(isDisabled){
        alert("don't click me")
    }
})

// THIS WHOLE PROCESS IS CALLED EVENT DELEGATION
// We have multiple things that delegate their events to a single listener.

cards.addEventListener('click', (e) => {
    
    if(e.target.matches('button')){
        handleButton();
    }

    if(e.target.matches('a')){
        handleLink();
    }

    if(e.target.matches('input')){
        handleInput();
    }
})

// This won't work, as you need to reference listener function
cards.removeEventListener('click');

// So...
const listener = (e) => {
    
    if(e.target.matches('button')){
        handleButton();
    }

    if(e.target.matches('a')){
        handleLink();
    }

    if(e.target.matches('input')){
        handleInput();
    }
};

cards.removeEventListener('click', listener);


// Looking at the coordinates
cards.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cards.textContent = `x: ${x}, y: ${y}`;
})

// DataSets
// element.data-set.author

