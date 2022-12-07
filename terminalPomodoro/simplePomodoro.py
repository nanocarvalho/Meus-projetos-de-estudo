import time
from plyer import notification

count = 0
print("Starting Pomodoro")

if __name__ == "__main__":
    minutes = float(input("Pomodoro time (in minutes): ")) * 60
    smallBreak = float(input("Small pause time: ")) * 60
    longBreak = float(input("Long pause time: ")) * 60
    
    while True:
        time.sleep(minutes)
        count += 1
        notification.notify(
            title = "Good job!",
            message = "Take a small break!",
        )

        time.sleep(smallBreak)
        notification.notify(
            title = "Time to get back!",
            message = "Pomodoros done: " + str(count),
        )

        if count % 4 == 0:
            notification.notify(
                title = "Time to the long pause!",
                message = "Pomodoros done: " + str(count),
            )
            time.sleep(longBreak)
            notification.notify(
                title = "Time to get back!",
                message = "Let's Go!",
            )