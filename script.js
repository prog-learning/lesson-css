const lessonTitles = [
  'Selector',
  'Color',
  'Font',
  'Size',
  'Box Model',
  'Shadow',
  'Flexbox',
  'Position',
  'Grid Layout',
  'Pseudo Element',
  'Transform',
  'Transition',
  'Animation',
];

const createPath = () => {
  let lessonsArray = [];
  for (let i = 0; i < lessonTitles.length; i++) {
    const num = ('0' + (i + 1)).slice(-2);
    lessonsArray.push({
      title: lessonTitles[i],
      path: `./lesson${num}/index.html`
    });
  }
  return lessonsArray;
};
createPath().forEach(lesson => {
  const el = document.createElement('li');
  el.innerHTML = `<a href='${lesson.path}'>${lesson.title}</a>`;
  console.log(el);
  document.getElementById('lessons').appendChild(el);
});
