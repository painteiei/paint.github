
        function moveToNext(current, nextId) {
            if (current.value.length === current.maxLength && nextId) {
                document.getElementById(nextId).focus();
            }
        }

        function moveToPrevious(current, prevId) {
            if (current.value === '' && prevId && event.key === 'Backspace') {
                document.getElementById(prevId).focus();
            }
        }

        function verifyCode() {
            const digit1 = document.getElementById('digit1').value;
            const digit2 = document.getElementById('digit2').value;
            const digit3 = document.getElementById('digit3').value;
            const digit4 = document.getElementById('digit4').value;
            const digit5 = document.getElementById('digit5').value;
            const digit6 = document.getElementById('digit6').value;

            const enteredCode = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;
            const correctCode = "419141";

            const result = document.getElementById('result');
            if (enteredCode === correctCode) {
                result.style.color = 'green';
                result.innerText = "รหัสผ่านถูกต้อง!";
                window.location.href = "nextpage.html";
            } else {
                result.style.color = 'red';
                result.innerText = "รหัสผ่านไม่ถูกต้อง ลองอีกครั้ง!";
            }
        }
   