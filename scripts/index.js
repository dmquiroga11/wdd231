const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const currentTime = document.querySelector("#currentTime");

function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
}

const nav = document.querySelector("#nav");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});

const year = document.querySelector("#year");
const today = new Date
year.innerHTML = `&copy; ${today.getFullYear()}`

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



const completedCourseNumbers = [110, 130, 231, 210];
completedCourseNumbers.forEach(courseNumber => {
    const course = courses.find(c => c.number === courseNumber);
    if (course) {
        course.completed = true;
    }
});

function displayCourses(filter = null) {
    const container = document.querySelector('#courses-container');
    container.innerHTML = ''; 

    const filteredCourses = filter ? courses.filter(course => course.subject === filter) : courses;

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseLink = document.createElement('a');
        courseLink.className = `box5a colbox ${course.completed ? 'completed' : 'not-completed'}`;
        courseLink.href = '#'; 
        courseLink.innerHTML = `<strong>${course.subject} ${course.number}</strong>`;
        courseLink.addEventListener('click', (e) => {
            e.preventDefault();  // Prevenir el comportamiento por defecto del enlace
            mostrarDetalles(course);
        });
        container.appendChild(courseLink);
        
        totalCredits += course.credits;
    });

    document.querySelector('#total-credits').textContent = `Total Credits: ${totalCredits}`;
}

function mostrarDetalles(course) {
    const dialog = document.getElementById('course-details');
    document.getElementById('course-name').textContent = course.title;
    document.getElementById('tittle').textContent = `Título: ${course.title}`;
    document.getElementById('credits').textContent = `Créditos: ${course.credits}`;
    document.getElementById('certificate').textContent = `Certificado: ${course.certificate}`;
    document.getElementById('description').textContent = `Descripción: ${course.description}`;
    document.getElementById('technology').textContent = `Tecnología: ${course.technology.join(', ')}`;
    dialog.showModal();
}

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('course-details').close();
});

document.querySelector('#show-all').addEventListener('click', () => displayCourses());
document.querySelector('#show-cse').addEventListener('click', () => displayCourses('CSE'));
document.querySelector('#show-wdd').addEventListener('click', () => displayCourses('WDD'));

displayCourses();




       
   


