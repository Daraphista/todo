const Data = (() => {
  const ProjectState = (title = 'unnamed') => {
  const tasks = [];
  return { title, tasks };
  }
  const CategoryState = (title) => {
  const tasks = [];
  return { title, tasks };
  }
  const TaskState = (title) => {
  let priority = 'urgent';
  let dueDate = 'no date';
  return { title, priority, dueDate };
  }

  let projects = localStorage.getItem('projects') 
  ? JSON.parse(localStorage.getItem('projects')) 
  : [];

  let categories = localStorage.getItem('categories') 
  ? JSON.parse(localStorage.getItem('categories')) 
  : [
  CategoryState('Inbox'), 
  CategoryState('Today'), 
  CategoryState('This week')
  ];

  console.log('%c Categories', 'color: orange;');
  console.table(categories);
  console.log('%c Projects', 'color: green;');
  console.table(projects);
  console.log('%c Localstorage', 'color: pink');
  console.table(localStorage);

  const Deleter = (array, state) => ({
  deleteSelf: () => {
    array.splice(array.indexOf(state), 1);
    console.log('deleted')
  }
  })
  const Creator = (state) => ({
  createTask: (title = 'unnamed') => {
    const task = TaskState(title)
    state.tasks.push(task);
    return task;
  }
  })
  const TitleChanger = (state) => ({
  changeTitle: (text) => {
    state.title = text;
  }
  })
  const DateChanger = (state) => ({
  changeDueDate: (text) => {
    state.dueDate = text;
  }
  })
  const PriorityChanger = (state) => ({
  changePriority: (text) => {
    state.priority;
  }
  })

  const composeObjects = (projects) => {
    projects.forEach(ProjectState => {
      if(ProjectState.tasks.length != 0) {
        ProjectState.tasks.forEach(TaskState => {
          return Object.assign(
            TaskState,
            Deleter(ProjectState.tasks, TaskState),
            TitleChanger(TaskState),
            DateChanger(TaskState),
            PriorityChanger(TaskState),
          )
        })
      }
      return Object.assign(
        ProjectState, 
        Deleter(projects, ProjectState),
        Creator(ProjectState),
        TitleChanger(ProjectState),
      );
    })
  };

  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('categories', JSON.stringify(categories));

  return { projects, categories, ProjectState, TaskState, composeObjects };
})();

export default Data;