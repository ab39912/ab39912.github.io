window.addEventListener('load', () => {
  
    const paramas = new URL(document.location)).searchParams;
    const name = paramas.get('name');
    const tmp = paramas.get('tmp');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-tmp').innerHTML = tmp;
};