import DOM from './DOM'
import './style.css';

let projects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];

const ProjectState = (title) => {
  const tasks = [];
  return { title, tasks };
}
const TaskState = (title) => {
  let priority = 'urgent';
  let dueDate = 'today';
  return { title, priority, dueDate };
}

const Deleter = (array, state) => ({
  deleteSelf: () => {
    array.splice(array.indexOf(state));
  }
})
const Creator = (state) => ({
  createTask: (title) => {
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

const composeObjects = (() => {
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
})();



