import DOM from './DOM'
import './style.css';

const content = document.querySelector('#content');

const Todo = (() => {

  const _NavBar = (()=> {
    let categories = localStorage.getItem('categories') 
    ? JSON.parse(localStorage.getItem('categories')) 
    : [
      CategoryState('Inbox'), 
      CategoryState('Today'), 
      CategoryState('This week')
    ];
    const _loadCategories = (parent) => {
      const section = DOM.createSection(parent, 'category-section');
      const categoriesContainer = DOM.createContainer(section, 'categories');
      categories.forEach(category => {
        DOM.createButton(categoriesContainer, category.title);
      })
    }

    let projects = localStorage.getItem('projects') 
    ? JSON.parse(localStorage.getItem('projects')) 
    : [];
    const _loadProjects = (parent) => {
      const section = DOM.createSection(parent, 'project-section');
      const projectsBar = DOM.createContainer(section, 'projects');
          DOM.createHeading(projectsBar, 'h2', 'Projects');
          const projectsContainer = DOM.createContainer(projectsBar, 'projects');
            projects.forEach(project => {
              DOM.createButton(projectsContainer, project.title);
            })
          DOM.createButton(projectsBar, '+ Add Project');
    }

    const load = (parent) => {
      const container = DOM.createContainer(parent, 'navbar');
      _loadCategories(container);
      _loadProjects(container);
    }

    return { load };
  })();
  const _Main = (() => {
    const load = (parent) => {
      const container = DOM.createContainer(parent, 'main');
      const section = DOM.createSection(container);
      const heading = DOM.createHeading(section, 'h2', 'Projects');
      const button = DOM.createButton(section, '+ Add Task');
    }
    
    return { load };
  })();
  
  const load = (parent) => {
    _NavBar.load(parent);
    _Main.load(parent);
  }

  return { load };
})();

export default Todo;