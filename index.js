window.onload = () => {
    let container = document.getElementById('manpage');

    container.addEventListener('scroll', () => {
        if ((container.scrollTop + window.innerHeight) >= container.scrollHeight) {
            document.getElementById('console-colon').style.display = 'none';
            document.getElementById('console-end').style.display = 'inline';
        } else {    
            document.getElementById('console-colon').style.display = 'inline';
            document.getElementById('console-end').style.display = 'none';
        }
    });
};

window.onkeydown = (event) => {
    if (event.key && event.key === 'q') {
        window.location.href = "https://github.com/sjgllghr";
    }
};