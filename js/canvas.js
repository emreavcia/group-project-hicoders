import { avarageGrade } from "./avarageGradeFunction.js";
import { data, SUBJECTS } from "./data.js";

export const handleCanvas = () => {

    data.forEach(classes => {
        const avarageGradeList = SUBJECTS.map(subject => avarageGrade(subject, classes))
        const ctx = document.getElementById(`${classes.id}-canvas`).getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: SUBJECTS,
                datasets: [{
                    label: "This will be invisible",
                    data: avarageGradeList,
                    backgroundColor: [
                        'rgb(40, 167, 69)',
                    ],
                    borderColor: [
                        'rgb(40, 167, 69)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            }
        });
    });

}
