document.addEventListener("DOMContentLoaded", function () {

    const taskAssignedCount = document.getElementById("taskAssignedCount");
    const taskCompletedCount = document.getElementById("taskCompletedCount");
    const completeButtons = document.querySelectorAll(".complete-task");
    const activityLogMessages = document.getElementById("activityLogMessages"); 
    const clearHistoryButton = document.getElementById("clearHistoryButton"); 

    let assignedTasks = parseInt(taskAssignedCount.textContent);
    let completedTasks = parseInt(taskCompletedCount.textContent);

    completeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (assignedTasks > 0) {

                alert("Task marked as completed!");

                assignedTasks--; 
                completedTasks++; 

                taskAssignedCount.textContent = assignedTasks;
                taskCompletedCount.textContent = completedTasks;

                const currentTime = new Date().toLocaleTimeString();

                const taskCard = button.closest('.task-card'); 
                

                const taskName = taskCard.querySelector('.task-name').textContent;

                const message = `You have completed the task '${taskName}' at ${currentTime}`;

                const messageElement = document.createElement("p");
                messageElement.textContent = message;

                messageElement.style.backgroundColor = "#f4f7ff"; 
                messageElement.style.padding = "10px";
                messageElement.style.borderRadius = "5px";
                messageElement.classList.add("text-gray-600", "font-normal", "font-['Poppins']", "tracking-wide");

                activityLogMessages.appendChild(messageElement);

                button.disabled = true;
                button.style.opacity = "0.5";
                button.style.backgroundColor = "#d3d3d3"; 
                if (completedTasks === (assignedTasks + completedTasks)) {
                    alert("Congratulations! You've completed all the current tasks!");
                }
            }
        });
    });


    clearHistoryButton.addEventListener("click", function () {

        activityLogMessages.innerHTML = ''; 
    });
});