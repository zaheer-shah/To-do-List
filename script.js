let addbtn = document.querySelector('.add-btn');
let input = document.querySelector('.input');
let tasklist = document.querySelector('.taskhere')
// console.log(addbtn);

addbtn.addEventListener('click', () => {
    if (input.value == '') {
        alert('Enter something first')
    }
    else {
        let listitem = document.createElement('li');

        //left
        let tasks = document.createElement('div');
        tasks.className = 'tasks'

        let image = document.createElement('img');
        image.className = 'uncheckimg';
        image.src = 'uncheck.jpg';
        let flag = 0;
        image.addEventListener('click', () => {
            if (flag == 0) {
                image.src = 'check.jpg';
                flag = 1;
            }
            else {
                image.src = 'uncheck.jpg';
                flag = 0;
            }
        })

        let inp = document.createElement('input');
        inp.className = 'valuehere';
        inp.value = input.value;
        inp.setAttribute('readonly', '');

        
        //right
        let buttons = document.createElement('div');
        buttons.classList = 'buttons';

        let editbtn = document.createElement('button');
        editbtn.className = 'editbtn';
        editbtn.innerText = 'Edit';
        let check = 0;
        editbtn.addEventListener('click', () => {
            if (check == 0) {
                editbtn.innerText = 'Save';
                inp.removeAttribute('readonly');
                check = 1;
            }
            else {
                editbtn.innerText = 'Edit';
                check = 0;
                inp.setAttribute('readonly', '');
            }
        })

        let deletebtn = document.createElement('button');
        deletebtn.className = 'deletebtn';
        deletebtn.innerText = 'Delete';
        deletebtn.addEventListener('click', () => {
            listitem.remove();
        })

        tasklist.append(listitem);
        listitem.append(tasks);
        tasks.append(image);
        tasks.append(inp);
        listitem.append(buttons);
        buttons.append(editbtn);
        buttons.append(deletebtn);
        input.value = '';

    }
})
