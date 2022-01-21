import './style.css';
import Todo from './ui';

const content = document.querySelector('#content');
Todo.load(content);

const buttons = Array.from(document.querySelectorAll('.navbar button'));
buttons.forEach(button => button.addEventListener('click', () => {
  console.log('cleared main');
  Todo.reloadMain();
}))

content.addEventListener('click', e => {
  if(e.target.closest('button.add') == null) {
    document.querySelector('.activated').classList.remove('activated');
  }
})

window.addEventListener('click', e => {
  // console.log(e, e.target);
})


