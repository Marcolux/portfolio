console.log("hello")

let displayMenuLeft = document.getElementById("displayMenuLeft")
let displayMenuRight = document.getElementById("displayMenuRight")
let navigationBar = document.getElementById("navigationBar")

let projects = document.getElementById('Projects')
let nav = document.querySelector('nav')
let projectsLink = document.getElementById('projectsLink')


displayMenuLeft.addEventListener('click',()=>{
    console.log('hi')
    navigationBar.style.width="80vw"
    displayMenuRight.style.right='99%'
    displayMenuLeft.style.right='99%'
    navigationBar.style.fontSize="3vh"
    projects.style.height='0vh'
    projects.style.display='flex'
    displayMenuRight.style.transition = '.25s ease'
    displayMenuLeft.style.transition = '.25s ease'
    


    if(displayMenuRight.style.right='99%'){
        displayMenuLeft.style.zIndex='-1'
        displayMenuRight.style.zIndex='1'
        nav.style.width = '98vw'
    }
})

displayMenuRight.addEventListener('click',()=>{
    console.log('hi')
    navigationBar.style.width="0vw"
    navigationBar.style.transition = '.3s ease-out'
    displayMenuLeft.style.right='1px'
    displayMenuLeft.style.transition = '1s ease'
    displayMenuRight.style.right='1px'
    displayMenuRight.style.transition = '1s ease'
    projects.style.display = 'none';
    

    if(displayMenuRight.style.right==='1px')
    {   displayMenuRight.style.zIndex='-1'
        displayMenuLeft.style.zIndex='1'
        nav.style.width = '0vw'
}})

projectsLink.addEventListener('click', ()=>{
    console.log('hi')
    if(projects.style.height === '0vh'){
        // projects.style.display = 'flex'
        projects.style.height= '90vh';}
    else{
        projects.style.height= '0vh'
        
    }
    
})