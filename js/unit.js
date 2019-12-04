function getTime()
{
    return (new Date()).getTime();
}

class Unit
{
    constructor(x, y, dist, currmove)
    {
        this.x = x;
        this.y = y;
        this.place = dist;
        this.direction = currmove;
        this.moveq = [];
        this.steps = 0;
        this.lastmain = 0;
    }

    move(direction, hx, hy)
    {
        console.log(direction);
        this.moveq.push({
            direction: direction,
            hx: hx,
            hy: hy
        });
    }

    main()
    {
        if(this.moveq.length)
        {
            let next = this.moveq[0];
            if(this.x == next.hx && this.y == next.hy)
            {
                this.direction = next.direction;
                this.moveq = this.moveq.slice(1);
            }
        }

        let now = getTime();
        if(now - this.lastmain >= 50)
        {
            switch(this.direction)
            {
                case "up":
                    this.y -= 12;
                    break;
                case "down":
                    this.y += 12;
                    break;
                case "left":
                    this.x -= 12;
                    break;
                case "right":
                    this.x += 12;
                    break;
            }
            this.lastmain = now;
        }

        
    }

    draw()
    {
        fill(255);
        if(this.place == 0)
            fill(255, 0, 0);
        rect(this.x, this.y, 12, 12);
    }
}