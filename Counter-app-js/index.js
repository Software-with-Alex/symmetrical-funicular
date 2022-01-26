


const startNumber0 = document.querySelector('.number-0');

const decreaseBtn = document.querySelector('.decrease-btn');

const resetBtn = document.querySelector('.reset-btn');

const increaseBtn = document.querySelector('.increase-btn')


    let spanValue = 0;

    decreaseBtn.addEventListener("click", function (event) {
    spanValue -=1;
    startNumber0.innerHTML = spanValue
})


resetBtn.addEventListener('click', resetBtnReset)
increaseBtn.addEventListener('click', increaseCount)


function resetBtnReset () {
    spanValue = 0;
    startNumber0.innerHTML = spanValue
}
function increaseCount () {
    spanValue +=1;
    startNumber0.innerHTML = spanValue
}







console.log(startNumber0)