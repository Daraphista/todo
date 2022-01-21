import DOM from './DOM'
import Data from './data';
import './style.css';

const content = document.querySelector('#content');

const Todo = (() => {
  let categories = localStorage.getItem('categories') 
  ? JSON.parse(localStorage.getItem('categories')) 
  : [
    CategoryState('Inbox'), 
    CategoryState('Today'), 
    CategoryState('This week')
  ];
  
  let projects = localStorage.getItem('projects') 
  ? JSON.parse(localStorage.getItem('projects')) 
  : [];

  Data.composeObjects(projects);

  const _NavBar = (()=> {
    const _loadCategories = (parent) => {
      const section = DOM.createSection(parent, 'category-section');
      const categoriesContainer = DOM.createContainer(section, 'categories');
      categories.forEach(category => {
        const button = (category.title == 'Inbox') 
        ? DOM.createButton(categoriesContainer, category.title, 'selected') 
        : DOM.createButton(categoriesContainer, category.title);
        button.setAttribute('data-index', categories.indexOf(category));

        button.addEventListener('click', e => {
          document.querySelector('.navbar .selected').classList.remove('selected');
          button.classList.add('selected');
          console.log(`category '${category.title}' was clicked`, button.classList);
        })
      })
    }

    const _loadProjects = (parent) => {
      const section = DOM.createSection(parent, 'project-section');
      const projectsBar = DOM.createContainer(section, 'projects');
        DOM.createHeading(projectsBar, 'h2', 'Projects');
        const projectsContainer = DOM.createContainer(projectsBar, 'projects');
          projects.forEach(project => {
            let title = (project.title === '') ? 'untitled' : project.title;
            const button = DOM.createButton(projectsContainer, title);
            button.setAttribute('data-index', projects.indexOf(project));
            console.log(button.dataset.index);
            button.addEventListener('click', e => {
              document.querySelector('.navbar .selected').classList.remove('selected');
              button.classList.add('selected');
              console.log(`project '${title}' was clicked`);
            })

            const icon = DOM.createIcon(button, 'far', 'fa-trash-alt')
            icon.addEventListener('click', e => {
              project.deleteSelf();
              localStorage.setItem('projects', JSON.stringify(projects));
              alert(`Are you sure you want to delete project '${title}'?`);
              location.reload();
            })
          })

        const addProjectBtn = DOM.createButton(projectsBar, '', 'add');
        addProjectBtn.addEventListener('click', e => {
          if(!e.target.classList.contains('confirmation')) {
            addProjectBtn.classList.add('activated');
            console.log('Add Project is activated');
          }
          if(addProjectBtn.classList.contains('activated')) {
            // content.style.cursor = 'pointer';
          }
        })
        DOM.createSpan(addProjectBtn, '+ Add Project');

        const addProjectForm = DOM.createForm(addProjectBtn)
        const input = DOM.createInput(addProjectForm, 'Project title...', 'add-project', 'text');
        
        const confirmationBtn = DOM.createButton(addProjectForm, '+', 'confirmation');
        confirmationBtn.addEventListener('click', () => {
          addProjectBtn.classList.remove('activated');
          const project = Data.ProjectState(input.value);
          projects.push(project);
          localStorage.setItem('projects', JSON.stringify(projects));
          console.log(projects);
          location.reload();
        })
    }

    const container = DOM.createContainer(
      document.querySelector('#content'), 
      'navbar'
    );

    const load = () => {
      _loadCategories(container);
      _loadProjects(container);
    }

    return { load };
  })();
  const _Main = (() => {
    const _container = DOM.createContainer(
      document.getElementById('content'), 
      'main'
    );
    const load = () => {
      const section = DOM.createSection(_container);

      const selected = document.querySelector('.selected');
      let headingText;
      if(selected.parentElement.classList.contains('categories')) {
        headingText = categories[selected.dataset.index].title;
      } else if(selected.parentElement.classList.contains('projects')) {
        headingText = projects[selected.dataset.index].title;
      }

      const heading = DOM.createHeading(section, 'h2', headingText);
      const tasks = projects[selected.dataset.index].tasks;
      console.log(tasks);
      tasks.forEach(task => {
        const container = DOM.createContainer(section, 'task');
        const icon = DOM.createIcon(container, 'far', 'fa-circle');
        DOM.createSpan(container, task.title);
        const date = DOM.createContainer(container, 'date');
        DOM.createSpan(date, task.dueDate);
        const dateInput = DOM.createInput(date, '', '', 'date');
        const dateValue = dateInput.value;
        date.addEventListener('click', (e) => {
          if(e.target.tagName !== 'INPUT') {
            date.classList.add('revealed');
          }
        })
        window.addEventListener('click', e => {
          const dateValue2 = dateInput.value;
          if(dateValue != dateValue2) {
            task.dueDate = dateValue2;
            console.log(task);
            localStorage.setItem('projects', JSON.stringify(projects));
            reloadMain();
          }
          // const form = document.querySelector('.date.revealed form');
          if(e.target.closest('.revealed') == null) {
            document.querySelector('.revealed').classList.remove('revealed');
          }
        })
        icon.addEventListener('click', e => {
          icon.classList.remove('far')
          icon.classList.remove('fa-circle');
          icon.classList.add('fas');
          icon.classList.add('fa-check');
          task.deleteSelf();
          localStorage.setItem('projects', JSON.stringify(projects));
          console.log('lmao');
        })
      })
      
      const button = DOM.createButton(section, '', 'add');
      DOM.createSpan(button, '+ Add Task');
      const buttonForm = DOM.createForm(button);
      const buttonFormInput = DOM.createInput(buttonForm, 'I want to...', '', 'text');
      const selectedProjectBtn = document.querySelector('.projects .selected');
      const confirmationBtn = DOM.createButton(buttonForm, '+', 'confirmation');
      button.addEventListener('click', e => {
        const project = projects[selectedProjectBtn.dataset.index];
        console.log(project);
        
        if(!e.target.classList.contains('confirmation')) {
          button.classList.add('activated');
        } else {
          button.classList.remove('activated');
          console.log(selectedProjectBtn.dataset.index);
          project.createTask(buttonFormInput.value);
          reloadMain();
          projects = JSON.parse(localStorage.getItem('projects'));
        }
        if(button.classList.contains('activated')) {
          console.log('asdkjfhsakdjf')
          // content.style.cursor = 'pointer';
        }
        
        localStorage.setItem('projects', JSON.stringify(projects));  
      })
    }

    return { load };
  })();
  
  const load = (parent) => {
    _NavBar.load(parent);
    _Main.load(parent);
  }

  const clearMain = () => {
    const main = document.querySelector('.main');
    while(main.firstElementChild) {
      main.removeChild(main.firstElementChild);
    }
  }

  const reloadMain = () => {
    clearMain();
    _Main.load();
  }

  return { load, reloadMain };
})();

export default Todo;