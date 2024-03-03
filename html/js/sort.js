
const elementsNav = document.getElementsByClassName('nav__item');
const allCont = document.getElementsByClassName('content') ;
console.log(elementsNav);

for(let i=0; i < elementsNav.length ; i++){
    elementsNav[i].addEventListener("click",function(){
        for(let j=0 ; j < elementsNav.length ; j++){
            elementsNav[j].classList.remove("toggled");
            allCont[j].classList.remove("active");
        }
        elementsNav[i].className += " toggled" ;
        allCont[i].classList.add("active")
    })
}





const bse = document.querySelectorAll('.bubble-sort .element') ;
const ise = document.querySelectorAll('.insertion-sort .element') ;
const sse = document.querySelectorAll('.selection-sort .element');
const mse = document.querySelectorAll('.merge-sort .element');
const qse = document.querySelectorAll('.quick-sort .element');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function bubblesortClick(){
    for(let i=0; i< bse.length ; i++){
        for(let j=0; j<bse.length - 1 ; j++){
            if(bse[j].innerHTML > bse[j+1].innerHTML){

                document.getElementById(j).style.backgroundColor = "green"
                document.getElementById(j+1).style.backgroundColor = "green"

                await sleep(500);

                var vj = bse[j].innerHTML;
                bse[j].innerHTML = bse[j+1].innerHTML ;
                bse[j+1].innerHTML = vj ;
                
                await sleep(500);

                document.getElementById(j).style.backgroundColor = "transparent"
                document.getElementById(j+1).style.backgroundColor = "transparent"
            
            }
        }
    }
}


async function insertionsortClick(){
    for (let i = 1; i < ise.length ; i++) {

        var key = ise[i].cloneNode(true);
        document.getElementById("is"+(i)).style.backgroundColor = 'red';
        var j = i - 1;

        while (j >= 0 && parseInt(ise[j].innerHTML) > parseInt(key.innerHTML)) {
            await sleep(300)
            document.getElementById("is"+(j)).style.backgroundColor = 'green';
            document.getElementById("is"+(j+1)).style.backgroundColor = 'green';
            await sleep(1000);
            
            ise[j+1].innerHTML = ise[j].innerHTML ;
            document.getElementById("is"+(j)).style.backgroundColor = '';
            document.getElementById("is"+(j+1)).style.backgroundColor = '';
            j--;
        }

        document.getElementById("is"+(i)).style.backgroundColor = 'red';
        await sleep(1000);
        ise[j + 1].innerHTML = key.innerHTML;
        document.getElementById("is"+(i)).style.backgroundColor = '';
    }
}


async function selectionsortClick(){
    for (let i = 0; i < sse.length ; i++) {
        let minIndex = i;

        // Change color to green for selected element
        document.getElementById("ss"+(i)).style.backgroundColor = 'green';

        for (let j = i + 1; j < sse.length ; j++) {
            // Change color to yellow for the current comparison
            document.getElementById("ss"+(j)).style.backgroundColor = 'red';

            // Introduce a delay for observation
            await sleep(500);

            // Change color back to default
            document.getElementById("ss"+(j)).style.backgroundColor = '';

            if (parseInt(sse[j].innerHTML) < parseInt(sse[minIndex].innerHTML)) {
                // Update minIndex if a smaller element is found
                minIndex = j;
            }
        }

        // Swap the elements
        const temp = sse[i].innerHTML;
        sse[i].innerHTML = sse[minIndex].innerHTML;
        sse[minIndex].innerHTML = temp;
        await sleep(500);
        // Change color back to default after the swap
        document.getElementById("ss"+(minIndex)).style.backgroundColor = '';
        document.getElementById("ss"+(i)).style.backgroundColor = '';
    }
}


async function mergesortClick() {
    var left = 0 ;
    var right = mse.length - 1 ;
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Recursively sort both halves
        await mergeSort(mse, left, mid);
        await mergeSort(mse, mid + 1, right);

        // Merge the sorted halves
        await merge(mse, left, mid, right);
    }
}

async function merge(mse, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temporary arrays
    const leftArray = Array.from({ length: n1 }, (_, index) => document.getElementById("ms"+(left + index)).style.height);
    const rightArray = Array.from({ length: n2 }, (_, index) => document.getElementById("ms"+(mid+1+index)).style.height);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        // Change color to yellow for the current comparison
        document.getElementById("ms"+(left + i)).style.backgroundColor = 'yellow';
        document.getElementById("ms"+(mid+1+j)).style.backgroundColor = 'yellow';

        // Introduce a delay for observation
        await sleep(1000);

        // Change color back to default
        document.getElementById("ms"+(left + i)).style.backgroundColor = '';
        document.getElementById("ms"+(mid+1+j)).style.backgroundColor = '';

        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
            // Update height and color
            document.getElementById("ms"+(k)).style.height = leftArray[i];
            document.getElementById("ms"+(k)).style.backgroundColor = 'green';
            i++;
        } else {
            // Update height and color
            document.getElementById("ms"+(k)).style.height = rightArray[j];
            document.getElementById("ms"+(k)).style.backgroundColor = 'green';
            j++;
        }
        k++;
    }

    // Copy the remaining elements of leftArray
    while (i < n1) {
        // Update height and color
        document.getElementById("ms"+(k)).style.height = leftArray[i];
        document.getElementById("ms"+(k)).style.backgroundColor = 'green';
        i++;
        k++;
    }

    // Copy the remaining elements of rightArray
    while (j < n2) {
        // Update height and color
        document.getElementById("ms"+(k)).style.height = rightArray[j];
        document.getElementById("ms"+(k)).style.backgroundColor = 'green';
        j++;
        k++;
    }
}


async function mergeSort(elements, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Recursively sort both halves
        await mergeSort(elements, left, mid);
        await mergeSort(elements, mid + 1, right);

        // Merge the sorted halves
        await merge(elements, left, mid, right);
    }
}

async function merge(elements, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temporary arrays
    const leftArray = Array.from({ length: n1 }, (_, index) => elements[left + index].style.height);
    const rightArray = Array.from({ length: n2 }, (_, index) => elements[mid + 1 + index].style.height);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        // Change color to yellow for the current comparison
        elements[left + i].style.backgroundColor = 'yellow';
        elements[mid + 1 + j].style.backgroundColor = 'yellow';

        // Introduce a delay for observation
        await sleep(500);

        // Change color back to default
        elements[left + i].style.backgroundColor = '';
        elements[mid + 1 + j].style.backgroundColor = '';

        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
            // Update height and color
            elements[k].style.height = leftArray[i];
            elements[k].style.backgroundColor = 'green';
            i++;
        } else {
            // Update height and color
            elements[k].style.height = rightArray[j];
            elements[k].style.backgroundColor = 'green';
            j++;
        }
        k++;
    }

    // Copy the remaining elements of leftArray
    while (i < n1) {
        // Update height and color
        elements[k].style.height = leftArray[i];
        elements[k].style.backgroundColor = 'green';
        i++;
        k++;
    }

    // Copy the remaining elements of rightArray
    while (j < n2) {
        // Update height and color
        elements[k].style.height = rightArray[j];
        elements[k].style.backgroundColor = 'green';
        j++;
        k++;
    }
}

async function sortElements() {
    const sortableContainer = document.getElementById('sortable-container');
    const sortableElements = Array.from(sortableContainer.getElementsByClassName('sortable-element'));
    const length = sortableElements.length;

    // Reset element colors
    sortableElements.forEach(element => element.style.backgroundColor = 'lightblue');

    // Sort elements based on height using Merge Sort
    await mergeSort(sortableElements, 0, length - 1);
}