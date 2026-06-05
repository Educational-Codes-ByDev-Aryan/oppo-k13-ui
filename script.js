 function updateTime() {
            const now = new Date();

            let hours = now.getHours();
            let minutes = now.getMinutes();

            // add leading zero
            // if minutes < 10 → "0" + minutes
            // else → keep minutes as it is
            minutes = minutes < 10 ? "0" + minutes : minutes;


            hours = hours % 12;
            hours = hours ? hours : 12; // if 0 → 12

            const timeString = hours + ":" + minutes;

            document.getElementById("navTime").textContent = timeString;
            document.getElementById("mainTime").textContent = timeString;
        }
        updateTime();
        setInterval(updateTime, 1000);