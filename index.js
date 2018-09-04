window.onload = () => {
    console.log('loaded!');

    let container = document.getElementById('manpage');

    console.log(container);

    container.addEventListener('scroll', () => {
        console.log('scrolled!');
        if ((container.scrollTop + window.innerHeight) >= container.scrollHeight) {
            document.getElementById('console-colon').style.display = 'none';
            document.getElementById('console-end').style.display = 'inline';
        } else {    
            document.getElementById('console-colon').style.display = 'inline';
            document.getElementById('console-end').style.display = 'none';
        }
    });
};