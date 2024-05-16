        document.getElementById('courseForm').addEventListener('submit', function(event) {
            event.preventDefault();

            
            const approvalMessage = document.getElementById('approvalMessage');
            approvalMessage.textContent = "Submission Received. Waiting for approval...";
            approvalMessage.style.backgroundColor = 'red';
            
            setTimeout(() => {
                approvalMessage.textContent = "Courses Approved!";
                approvalMessage.style.backgroundColor = 'green';
                displayElectives();
            }, 3000); 
        });

        function displayElectives() {
            const electives = ["Wireless Sensor Networks", "Consumer Electronics", "Satellite Communication", "RF Signals"];
            const list = document.getElementById('electiveCoursesList');
            list.innerHTML = ''; 
            electives.forEach(course => {
                const option = document.createElement('option');
                option.textContent = course;
                option.value = course;
                list.appendChild(option);
            });
            document.getElementById('electives').style.display = 'block';
        }

        function submitElective() {
            const selectedElective = document.getElementById('electiveCoursesList').value;
            alert("You have submitted your elective choice: " + selectedElective);
            
        }
