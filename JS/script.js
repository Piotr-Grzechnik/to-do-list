{
    const tasks = [
        {
            content: "Masło",
            done: false,
        },
    ];
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
            htmlString += `<li>${task.content}</li>`;
        }
        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".form__input").value;
        if (newTask === "") {
            return;
        }
        AddNewTask(newTask);
    };
    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (onFormSubmit));
        Render();
        console.log(form);
    };

    init();
}