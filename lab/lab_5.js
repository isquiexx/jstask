// 1
const users = [
    { username: 'David', status: 'online', lastActivity: 10 },
    { username: 'Lucy', status: 'offline', lastActivity: 22 },
    { username: 'Bob', status: 'online', lastActivity: 104 }
];

const onlineUsers = users.filter(user => user.status === 'online');
const usersOnlineNames = onlineUsers.map(user => user.username).join(', ');

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

// 2
const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" }
];

function giveTalonsInOrder(patients, orders) {
    return orders.map(orderId => {
        return patients.find(patient => patient.id === orderId);
    });
}

const result1 = giveTalonsInOrder(people, ordersArr);
console.log('result', result1);

// 3
const student1 = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
};

function handleObject(obj, key, action) {
    if (action === 'get') {
        return obj[key];
    } else if (action === 'add') {
        obj[key] = "";
        return obj;
    } else if (action === 'delete') {
        delete obj[key];
        return obj;
    } else {
        return obj;
    }
}

const result2 = handleObject(student1, 'programmingLanguage', 'delete');
console.log('result', result2);

// 4
const student2 = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

function giveJobToStudent(student, jobName) {
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

    return {
        ...student,
        job: jobName
    };
}

const updatedStudent = giveJobToStudent(student2, 'веб-разработчик');
console.log('updatedStudent', updatedStudent);