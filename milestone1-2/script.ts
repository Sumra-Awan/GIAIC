const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
const SKILLS = document.getElementById('SKILLS') as HTMLElement

togglebutton.addEventListener('click' ,()=> {
if(SKILLS.style.display === 'none') {
SKILLS.style.display = 'block'
         } else {
        SKILLS.style.display = 'none' 
  }
});