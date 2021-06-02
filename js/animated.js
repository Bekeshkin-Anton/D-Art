let circles = document.querySelectorAll('.circle');
let direction = 0;
let frame = 0;
const FRAMES_COUNT = 60;


const onFrame = () => {
    let startX, startY;
    let endX, endY;

    for(const circle of circles) {
        if(circle.attributes['origin-x'] == null) 
            continue;
        if(direction == 0){
            startX = Number(circle.attributes['to-x1'].value);
            endX = Number(circle.attributes['to-x2'].value);
            startY = Number(circle.attributes['to-y1'].value);
            endY = Number(circle.attributes['to-y2'].value);
        }else {
            startX = Number(circle.attributes['to-x2'].value);
            endX = Number(circle.attributes['to-x1'].value);
            startY = Number(circle.attributes['to-y2'].value);
            endY = Number(circle.attributes['to-y1'].value);
        }

        const newX = startX + ((endX - startX) * (frame / FRAMES_COUNT));
        const newY = startY + ((endY - startY) * (frame / FRAMES_COUNT));
    
        circle.setAttribute('transform', `translate(${newX} ${newY})`);
    }

    frame++;

    if(frame > FRAMES_COUNT) {
        frame = 0;
        direction = direction === 0 ? 1 : 0;

        if(direction === 0){
            for(const circle of circles) {
                if(circle.attributes['origin-x'] == null) 
                    continue;

                const x = Number(circle.attributes['origin-x'].value);
                const y = Number(circle.attributes['origin-y'].value);

                const newX = x + Math.random() * 100 - 50;
                const newY = y + Math.random() * 100 - 50;
                circle.setAttribute('to-x2', `${newX}`);
                circle.setAttribute('to-y2', `${newY}`);
            }
        }
    }
    
}


for(const circle of circles) {
    const origin = circle.attributes['transform'].value
                            .replace('translate(', '')
                            .replace(')', '')
                            .replace('rotate(17)');
    if(origin.includes('matrix'))
    {
        continue;
    }
    const [x, y] = origin.split(' ');

    circle.setAttribute('origin-x', `${x}`);
    circle.setAttribute('origin-y', `${y}`);

    newX = Number(x) + Math.random() * 100 - 50;
    newY = Number(y) + Math.random() * 100 - 50;

    circle.setAttribute('to-x1', `${newX}`);
    circle.setAttribute('to-y1', `${newY}`);
    

    newX = Number(x) + Math.random() * 50;
    newY = Number(y) + Math.random() * 50;
    circle.setAttribute('to-x2', `${newX}`);
    circle.setAttribute('to-y2', `${newY}`);
}


setInterval(onFrame, 100);