

((d) => {

    // CHALLENGE AddClassTo

    const addClassTo = (className, selector) => {
        const selected = d.querySelector(selector);

        return selected !== null ? selected.classList.add(className) : null;
    };

    // let addedEl = addClassTo("col-md-12", ".js__first-list");
    // console.log(addedEl); // the <ul> - should have the new class
    // let addNoError = addClassTo("col-md-12", ".js__first-list-eek");
    // console.log(addNoError); // null


    // CHALLENGE RemoveClassFrom

    const removeClassFrom = (className, selector) => {
        const selected = d.querySelector(selector);

        return selected !== null ? selected.classList.remove(className) : null;
    }

    // let removedEl = removeClassFrom("col-md-12", ".js__first-list");
    // console.log(removedEl); // the <ul> - should have removed the class
    // let removeNoError = removeClassFrom("col-md-12", ".js__first-list-eek");
    // console.log(removeNoError);
    // // null


    // CHALLENGE addClassesTo

    const addClassesTo = (classNames, selectors) => {

        let validSelectors = selectors.filter(x => x !== null);
        let validClassNames = classNames.filter(x => x !== null);

        validSelectors.forEach(selector => {
            validClassNames.forEach(className => {
                document.querySelector(selector).classList.add(className);
            })
        });
    };

    // let addedEls = addClassesTo(["col-md-12", "list-group"], [".js__first-list", ".js__second-list"]);
    // console.log(addedEls); // the two <ul> elements - should have the new classes


    // CHALLENGE removeClassesFrom

    const removeClassesFrom = (classNames, selectors) => {
        
        let elements = selectors.filter(x => x !== null);
        let validClassNames = classNames.filter(x => x !== null);        

        elements.forEach(element => {            
            validClassNames.forEach(className => {
                document.querySelector(element).classList.remove(className);
            })
        });

        return elements;

    };

    let removedEls = removeClassesFrom(["col-md-12", "list-group"], [".js__first-list", ".js__second-list", ".k"]);
    console.log(removedEls); // the two <ul> elements - should have removed the classes

})(document);