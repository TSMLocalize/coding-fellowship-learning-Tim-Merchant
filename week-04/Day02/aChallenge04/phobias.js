((d) => {


    let phobias = [
        "katastichophobia", // Fear and avoidance of lists
        "rhabdophobia", // Fear of magic wands
        "eisoptrophobia", // Fear of mirrors
        "papaphobia", // Fear of the pope
        "hypegiaphobia", // Fear of responsibility
        "odontophobia", // Fear of dentistry
        "ergophobia", // Fear of work
        "pteronophobia", // Fear of feathers
        "taphephobia", // Fear of being buried alive
        "apiphobia", // Fear of bees
    ].sort();

    // create a list to add everything to
    let list = d.createElement("ul");

    // create some variables outside the forEach loop
    // lets us keep track of stuff between iterations
    let lastLetter, phobiaList;

    // for each phobia
    phobias.forEach(phobia => {
        // get the first letter of the phobia
        let letter = phobia.charAt(0);

        // if we've not come across this letter before
        if (letter !== lastLetter) {
            // set the lastLetter letter
            lastLetter = letter;
            // create a list item for the current letter
            // storing it in the variable outside the loop
            // that way we can reuse it on the next iteration
            let letterListItem = d.createElement("li");
            // set the text to the uppercased letter
            letterListItem.textContent = letter.toUpperCase();
            // add to the list
            list.append(letterListItem);

            // add a new ul
            // again, the variable lives outside the loop
            // so we can reference it on the next iteration
            phobiaList = d.createElement("ul");
            // append the phobia list to the letter li
            letterListItem.append(phobiaList);
        }

        // create a new list item for the current phobia
        let phobiaListItem = d.createElement("li");
        phobiaListItem.textContent = phobia;

        // append it to the last phobiaList that was created
        phobiaList.append(phobiaListItem);
    });

    // append the full list to the document
    d.getElementById("phobias").append(list);



    
    // let phobias = [
    //     "katastichophobia",
    //     "rhabdophobia",
    //     "eisoptrophobia",
    //     "papaphobia",
    //     "hypegiaphobia",
    //     "odontophobia",
    //     "ergophobia",
    //     "pteronophobia",
    //     "taphephobia",
    //     "apiphobia",
    // ];

    // phobias.sort();

    // let main = d.getElementById('phobias');
    // let frag = d.createDocumentFragment();
    // let currentLetter = '';

    // phobias.forEach(phobia => {
    //     if (phobia.charAt(0) !== currentLetter) {
    //         let subList = d.createElement('ul');
    //         currentLetter = `${phobia.charAt(0)}`;
    //         let listItem = d.createElement('li');
    //         listItem.textContent = `${currentLetter.toUpperCase()}`;
    //         subList.append(listItem);
    //         frag.append(subList);


    //         phobias.forEach(phobia => {
    //             let listItem = d.createElement('li');
    //             if (phobia.charAt(0) === currentLetter) {
    //                 let subList2 = d.createElement('ul');
    //                 listItem.textContent = `${phobia}`;
    //                 subList2.append(listItem);
    //                 subList.append(subList2);
    //             }
    //         })
    //     }
    // })

    // main.append(frag);

})(document)