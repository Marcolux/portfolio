console.log("hello")

let displayMenuLeft = document.getElementById("displayMenuLeft")
let displayMenuRight = document.getElementById("displayMenuRight")
let navigationBar = document.getElementById("navigationBar")

let aboutMe = document.getElementById('aboutMe')
let aboutMeLink = document.getElementById('aboutMeLink')


let projects = document.getElementById('Projects')
let nav = document.querySelector('nav')
let projectsLink = document.getElementById('projectsLink')

let contactsLink= document.getElementById('contactsLink')
let footer= document.querySelector('footer')

displayMenuLeft.addEventListener('click',()=>{
    console.log('hi')
    navigationBar.style.width="80vw"
    displayMenuRight.style.right='100%'
    displayMenuLeft.style.right='100%'
    navigationBar.style.fontSize="3vh"
    projects.style.height='0vh'
    projects.style.display='flex'
    displayMenuRight.style.transition = '.25s ease'
    displayMenuLeft.style.transition = '.25s ease'
    footer.style.height='0vh'
    aboutMe.style.height='0vh'
    aboutMe.style.display='flex'
    


    if(displayMenuRight.style.right='100%'){
        displayMenuLeft.style.display='none'
        displayMenuRight.style.display='flex'
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
    footer.style.height='0vh'
    aboutMe.style.display='none'

    if(displayMenuRight.style.right==='1px')
    {   displayMenuRight.style.display='none'
        displayMenuLeft.style.display='flex'
        nav.style.width = '0vw'
}})

projectsLink.addEventListener('click', ()=>{
    console.log('hi')
    if(projects.style.height === '0vh'){
        aboutMe.style.height= '0vh'
        projects.style.height= '90vh';}
    else{
        projects.style.height= '0vh'
        
    }
    
})

aboutMeLink.addEventListener('click',()=>{
    if(aboutMe.style.height === '0vh'){
        aboutMe.style.height= '90vh'
        projects.style.height = '0vh'
    }else{
        aboutMe.style.height= '0vh'
    }
})

contactsLink.addEventListener('click',()=>{
 
if(footer.style.height==='0vh'){
footer.style.height='10vh'
}else if(footer.style.height==='10vh'){
    footer.style.height='0vh'}
})


class SoftwareEngineer{
    constructor(fullstack){}
}