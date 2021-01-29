((d) => {

    const formControls = [...d.getElementsByClassName('form-control')];
    const submit = d.getElementById('submit');


    let checkInputs = () => {
        formControls.forEach(formControl => {

            let warning = d.createElement('p');
            warning.classList.add('help-block');
            formControl.parentElement.append(warning);

            if (
                formControl.value === "" &&
                !formControl.parentElement.classList.contains('has-error')) {
                warning.textContent = "Field Required";
                formControl.parentElement.classList.add('has-error');
            }

            if (formControl.value !== "") {
                formControl.parentElement.classList.remove('has-error');
                warning.style.display = 'none';
                if (formControl.nextElementSibling) {
                    formControl.nextElementSibling.remove();
                }
                return;
            }
        })
    }

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        checkInputs();
    })


})(document)