

// for(let i =0; i < 3; i++){
    
// };



document.getElementsByClassName('tab-button')[0].addEventListener('click', function(){
    document.getElementsByClassName('tab-button')[0].classList.add('orange')
    document.getElementsByClassName('tab-button')[1].classList.remove('orange')
    document.getElementsByClassName('tab-button')[2].classList.remove('orange')
    document.getElementsByClassName('tab-content')[0].classList.add('show')
    document.getElementsByClassName('tab-content')[1].classList.remove('show')
    document.getElementsByClassName('tab-content')[2].classList.remove('show')
});

document.getElementsByClassName('tab-button')[1].addEventListener('click', function(){
    document.getElementsByClassName('tab-button')[1].classList.add('orange')
    document.getElementsByClassName('tab-button')[0].classList.remove('orange')
    document.getElementsByClassName('tab-button')[2].classList.remove('orange')
    document.getElementsByClassName('tab-content')[1].classList.add('show')
    document.getElementsByClassName('tab-content')[0].classList.remove('show')
    document.getElementsByClassName('tab-content')[2].classList.remove('show')
});

document.getElementsByClassName('tab-button')[2].addEventListener('click', function(){
    document.getElementsByClassName('tab-button')[2].classList.add('orange')
    document.getElementsByClassName('tab-button')[0].classList.remove('orange')
    document.getElementsByClassName('tab-button')[1].classList.remove('orange')
    document.getElementsByClassName('tab-content')[2].classList.add('show')
    document.getElementsByClassName('tab-content')[0].classList.remove('show')
    document.getElementsByClassName('tab-content')[1].classList.remove('show')
});


function 탭열기(){
}