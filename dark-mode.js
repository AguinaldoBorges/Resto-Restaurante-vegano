const inputContainer = document.querySelector('input');

const rootElement = document.documentElement;


const lightTheme = {
    '--background-color': '#FFF',

    '--text-color': '#1a1a1a'
}

const darkTheme = {
    '--background-color': '#1a1a1a',

    '--text-color': '#FFF'
}

inputContainer.addEventListener('change', function () {
    const ischeked = inputContainer.checked

    if (ischeked) {
        changeTheme(darkTheme);
    } else {
        changeTheme(lightTheme);
    }
});

function changeTheme(theme) {
    console.log(theme)
    for (const prop in theme) {
        changeProperty(prop, theme[prop])

    }
}


function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}
