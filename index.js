import inquirer from 'inquirer';
const tasks = [];

const menu = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: '-------Menú--------',
        choices: [
          { name: '.Agregar tarea', value: 'add' },
          { name: '.Completar tarea', value: 'complete' },
          { name: '.Eliminar tarea', value: 'delete' },
          { name: '.Mostrar tareas', value: 'list' },
          { name: '.Salir', value: 'exit' },
        ],
        pageSize: 6, 
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case 'add':
          addTask();
          break;
        case 'complete':
          completeTask();
          break;
        case 'delete':
          deleteTask();
          break;
        case 'list':
          showTasks();
          break;
        case 'exit':
          console.log('¡Hasta luego!');
          break;
      }
    });
};

const addTask = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'description',
        message: 'Por favor, proporciona una descripción para la tarea:',
      },
    ])
    .then((answer) => {
      const description = answer.description.trim();
      if (description) {
        tasks.push({ description, completed: false });
        console.log(`Tarea "${description}" agregada.`);
      }
      menu();
    });
};

const completeTask = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'taskIndex',
        message: 'Selecciona la tarea que deseas marcar como completada:',
        choices: tasks.map((task, index) => ({
          name: task.completed ? `[✔] ${task.description}` : `[ ] ${task.description}`,
          value: index,
        })),
      },
    ])
    .then((answer) => {
      const taskIndex = answer.taskIndex;
      if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log(`Tarea "${tasks[taskIndex].description}" marcada como completada.`);
      }
      menu();
    });
};

const deleteTask = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'taskIndex',
        message: 'Selecciona la tarea que deseas eliminar:',
        choices: tasks.map((task, index) => ({
          name: `[${index + 1}] ${task.description}`,
          value: index,
        })),
      },
    ])
    .then((answer) => {
      const taskIndex = answer.taskIndex;
      if (taskIndex >= 0 && taskIndex < tasks.length) {
        const deletedTask = tasks.splice(taskIndex, 1);
        console.log(`Tarea "${deletedTask[0].description}" eliminada.`);
      }
      menu();
    });
};

const showTasks = () => {
    if (tasks.length === 0) {
        console.log('No hay tareas disponibles.');
        menu();
      } else {
    console.log('\nLista de tareas:');
    tasks.forEach((task, index) => {
      const taskStatus = task.completed ? '[✔]' : '[ ]';
      const taskDescription = task.description;
      console.log(`${taskStatus}. ${taskDescription}`);
    });
    menu();
  };
}

menu();
