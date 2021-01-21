//Get input Element

let filterInput = document.querySelector('#filterInput');


//Add event listener

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //get value Input
    let filterValue = document.querySelector('#filterInput').value.toUpperCase();
    console.log(filterValue);

    //Get names Ul
    let ul = document.querySelector('#names');

    //get li from Ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop Through collection item from li
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        //if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';

        }
    }

}