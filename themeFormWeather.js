        // Theme Selection

        document.getElementById('theme-selector').addEventListener('change', function() {
            const selectedTheme = this.value;
            switch (selectedTheme) {
                case 'light':
                    document.body.className = 'light-theme';
                    break;
                case 'dark':
                    document.body.className = 'dark-theme';
                    break;
                case 'blue':
                    document.body.className = 'blue-theme';
                    break;
                default:
                    document.body.className = 'light-theme';
                    break;
            }
        });

        // Form Validation
        document.getElementById('registration-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            let message = '';

            switch (true) {
                case !username:
                    message = 'Username is required.';
                    break;
                case !email:
                    message = 'Email is required.';
                    break;
                case !password:
                    message = 'Password is required.';
                    break;
                default:
                    message = 'Form submitted successfully!';
                    break;
            }

            document.getElementById('validation-message').innerText = message;
        });

        // Weather Conditions
        document.getElementById('weather-selector').addEventListener('change', function() {
            const selectedWeather = this.value;
            let message = '';

            switch (selectedWeather) {
                case 'sunny':
                    message = 'It is a sunny day!';
                    break;
                case 'rainy':
                    message = 'It is raining outside.';
                    break;
                case 'snowy':
                    message = 'It is snowing outside.';
                    break;
                case 'cloudy':
                    message = 'It is cloudy today.';
                    break;
                default:
                    message = 'Select a weather condition.';
                    break;
            }

            document.getElementById('weather-message').innerText = message;
        });