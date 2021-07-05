{
    const tasks = [
        {
            content: "",
            done: false,
        },
    ];
    const ToogleTaskDone=(taskindex)=>{
        tasks[taskindex].done=!tasks[taskindex].done;
        Render();
    };
    const AddNewTask = (newTask) => {
        tasks.push(
            {
                content: newTask,
            });
        Render();
    };
    const Render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `<li class="form__task-list"><button class="form__button--toggleDone js-done">${task.done?"✔":""}</button><p class="form__task ${task.done?"form__task-done":""}">${task.content}</p><button class="form__button--deleteTask js-remove">🗑</button></li>`;
        }
        document.querySelector(".js-tasksList").innerHTML = htmlString;
        const removeButtons=document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index)=>{
            removeButton.addEventListener("click",()=>{
                tasks.splice(index,1);
                Render();
            })
        });
        const toogleDoneButtons=document.querySelectorAll(".js-done");
        toogleDoneButtons.forEach((toogleDoneButton, taskindex)=>{
            toogleDoneButton.addEventListener("click",()=>{
                ToogleTaskDone(taskindex);
            })
        });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".form__input").value;
        if (newTask === ""){
            document.querySelector(".form__input").focus();
            return;
        }
        AddNewTask(newTask);
        document.querySelector(".form__input").value=null;
    };
    const init = () => {
        onload=()=>{
            document.querySelector(".js-tasksList").innerHTML =`<input class="form__input form__input--disabled" type="text" placeholder="Start adding new tasks..." disabled>`
        };
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (onFormSubmit));
        Render();
        console.log(form);
    };

    init();
}