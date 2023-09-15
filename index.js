import inquirer from 'inquirer';
const tasks = [];

const menu = async () => {
    try {
      const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: '-----Menú-------',
          choices: [
            { name: 'Agregar tarea', value: 'add' },
            { name: 'Completar tarea', value: 'complete' },
            { name: 'Eliminar tarea', value: 'delete' },
            { name: 'Mostrar tareas', value: 'list' },
            { name: 'Salir', value: 'exit' },
          ],
          pageSize: 6,
        },
      ]);
  
      switch (answer.action) {
        case 'add':
          await addTask();
          break;
        case 'complete':
          await completeTask();
          break;
        case 'delete':
          await deleteTask();
          break;
        case 'list':
          showTasks();
          break;
        case 'exit':
          console.log('¡Hasta luego!');
          break;
      }
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
    }
  };
  
  const addTask = async () => {
    try {
      const answer = await inquirer.prompt([
        {
          type: 'input',
          name: 'description',
          message: 'Por favor, proporciona una descripción para la tarea:',
        },
      ]);
  
      const description = answer.description.trim();
      if (description) {
        tasks.push({ description, completed: false });
        console.log(`Tarea "${description}" agregada.`);
      }
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
    }
  };
  
  
  const completeTask = async () => {
    try {
      const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'taskIndex',
          message: 'Selecciona la tarea que deseas marcar como completada:',
          choices: tasks.map((task, index) => ({
            name: task.completed ? `[✔] ${task.description}` : `[ ] ${task.description}`,
            value: index,
          })),
        },
      ]);
  
      const taskIndex = answer.taskIndex;
      if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log(`Tarea "${tasks[taskIndex].description}" marcada como completada.`);
      }
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
    }
  };
  
  const deleteTask = async () => {
    try {
      const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'taskIndex',
          message: 'Selecciona la tarea que deseas eliminar:',
          choices: tasks.map((task, index) => ({
            name: `[${index + 1}] ${task.description}`,
            value: index,
          })),
        },
      ]);
  
      const taskIndex = answer.taskIndex;
      if (taskIndex >= 0 && taskIndex < tasks.length) {
        const deletedTask = tasks.splice(taskIndex, 1);
        console.log(`Tarea "${deletedTask[0].description}" eliminada.`);
      }
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
    }
  };
  
  const showTasks = () => {
    console.log('\nLista de tareas:');
    tasks.forEach((task, index) => {
      const taskStatus = task.completed ? '[✔]' : '[ ]';
      const taskDescription = task.description;
      console.log(`${taskStatus} ${index + 1}. ${taskDescription}`);
    });
    menu();
  };
  
  menu();