((d) => {

    let userInput = document.getElementById('text');
    let button = document.getElementById('button');
    let answer = document.getElementById('answer');

    let isPalindrome = word => {
        let reversedWord = word.split("").reverse().join("");
        return word === reversedWord;
    };

    button.addEventListener('click', () => {

        isPalindrome(userInput.value) ?
            answer.textContent = "It's a palindrome!" :
            answer.textContent = "It's not a palindrome...";

    });

})(document)