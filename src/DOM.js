const DOM = (() => {
  const addClassNames = (element, ...classNames) => {
    classNames.forEach(className => {
      element.classList.add(className);
    })
  }
  const createContainer = (parent, ...classNames) => {
    const container = document.createElement('div');
    parent.appendChild(container);
    addClassNames(container, ...classNames)
    
    return container;
  }
  const createSection = (parent, ...classNames) => {
    const section = document.createElement('section');
    parent.appendChild(section);
    addClassNames(section, ...classNames)

    return section;
  }
  const createHeading = (parent, type, text, ...classNames) => {
    const heading = document.createElement(type);
    heading.textContent = text;
    addClassNames(heading, ...classNames);
    parent.appendChild(heading);
  }
  const createPara = (parent, text, ...classNames) => {
    const para = document.createElement('p');
    para.textContent = text;
    addClassNames(para, ...classNames);
    parent.appendChild(para);
  }
  const createLink = (parent, text, target, href, color) => {
    const link = document.createElement('a');
    link.textContent = text;
    link.target = target;
    link.href = href;
    link.style.color = color;

    parent.appendChild(link);

    return link;
  }
  const createSpan = (parent, text, ...classNames) => {
    const span = document.createElement('span');
    span.textContent = text;
    addClassNames(span, ...classNames);
    parent.appendChild(span);

    return span
  }
  const createList = (parent, liNestsElements, ...lis) => {
    const ul = document.createElement('ul');
    parent.appendChild(ul);
    if(liNestsElements) {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.appendChild(li);
        ul.appendChild(item);
      })
    } else {
      lis.forEach(li => {
        const item = document.createElement('li');
        item.textContent = li;
        ul.appendChild(item);
      })
    }

    return ul;
  }
  const createImage = (parent, src) => {
    const image = document.createElement('img');
    image.src = src;
    parent.appendChild(image);
  }
  const createIcon = (parent, ...classNames) => {
    const icon = document.createElement('i');
    parent.appendChild(icon);
    addClassNames(icon, ...classNames)

    return icon;
  }
  const createIframe = (parent, src, loading) => {
    const iFrame = document.createElement('iframe');
    iFrame.src = src;
    iFrame.loading = loading;
    parent.appendChild(iFrame);
  }
  const createInput = (parent, placeholder, id, type) => {
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    parent.appendChild(input)

    return input;
  }
  const createForm = (parent) => {
    const form = document.createElement('form');
    parent.appendChild(form);

    return form;
  }
  const createButton = (parent, text, ...classNames) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.type = 'button';
    addClassNames(button, ...classNames);
    parent.appendChild(button);

    return button;
  }
  const removeElement = (element) => {
    const parent = element.parent;
    parent.removeChild(element);
  }

  return {
  addClassNames,
  createContainer, 
  createSection, 
  createHeading, 
  createPara,
  createLink,
  createSpan,
  createList,
  createImage,
  createIcon,
  createIframe,
  createInput,
  createForm,
  createButton,
  removeElement,
  }
})();

export default DOM;