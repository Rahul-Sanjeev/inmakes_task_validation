document.getElementById('taskForm').addEventListener('submit', function(event) {
            // Prevent form submission
            event.preventDefault();
            
            // Validate the form
            if (validateForm()) {
                alert('Form submitted successfully!');
            }
        });

        function validateForm() {
            // First name validation
            const firstName = document.getElementById('firstName').value;
            if (!/^[A-Za-z]{1,30}$/.test(firstName)) {
                alert('First name must be 1-30 characters long and contain only letters.');
                return false;
            }

            // Last name validation
            const lastName = document.getElementById('lastName').value;
            if (!/^[A-Za-z]{1,30}$/.test(lastName)) {
                alert('Last name must be 1-30 characters long and contain only letters.');
                return false;
            }

            // Mobile number validation
            const mobile = document.getElementById('mobile').value;
            if (!/^\d{10}$/.test(mobile)) {
                alert('Mobile number must be a 10-digit number.');
                return false;
            }

            // City validation
            const city = document.getElementById('city').value;
            if (!/^[A-Za-z]{1,30}$/.test(city)) {
                alert('City must be 1-30 characters long and contain only letters.');
                return false;
            }

            // PIN code validation
            const pinCode = document.getElementById('pinCode').value;
            if (!/^\d{6}$/.test(pinCode)) {
                alert('PIN code must be a 6-digit number.');
                return false;
            }

            // State validation
            const state = document.getElementById('state').value;
            if (!/^[A-Za-z]{1,30}$/.test(state)) {
                alert('State must be 1-30 characters long and contain only letters.');
                return false;
            }

            // Other validations are handled by the browser (e.g., required fields, email format)

            return true;
        }