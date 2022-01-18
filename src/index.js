import DOM from './DOM'
import './style.css';

const content = document.querySelector('#content');

const Todo = (() => {

  const _NavBar = (()=> {
    const categories = ['Inbox', 'Today', 'This Week']; // convert to objects
    const _loadCategories = (parent) => {
      const categoriesContainer = DOM.createContainer(parent, 'categories');
        categories.forEach(category => {
          DOM.createButton(categoriesContainer, category);
        })
    }
    const _loadProjects = (parent) => {
      const projectsContainer = DOM.createContainer(parent, 'projects');
        DOM.createHeading(projectsContainer, 'h2', 'Projects');
        DOM.createButton(projectsContainer, '+ Add Project');
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
    }
    
    return { load };
  })();
  
  const load = (parent) => {
    _NavBar.load(parent);
    // const navbar = DOM.createContainer(parent, 'navbar');
    // const main = DOM.createContainer(parent, 'main');
  }

  return { load };
})();

Todo.load(content);