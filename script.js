let select=document.querySelector('#select')
select.addEventListener('mouseover',function(){
    document.body.querySelector('.box').style.display='block'
})
select.addEventListener('mouseout',function(){
    document.body.querySelector('.box').style.display='none'
})
