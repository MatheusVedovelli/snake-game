class Snake
{
    constructor(x, y, size)
    {
        this.x = x;
        this.y = y;
        this.direction = "right";
        this.size = size;
        this.units = [];
        this.lastmove = 0;
        for(let i = 0; i < this.size; i++)
        {
            this.units[i] = new Unit(this.x - (12*i), this.y, i, "right");
        }
    }

    move(key)
    {        
        let lastdir = this.direction;
        switch(key)
        {
            case "ArrowUp":
                if(this.direction != "down")
                    this.direction = "up";
                break;
            case "ArrowDown":
                if(this.direction != "up")
                    this.direction = "down";
                break;
            case "ArrowLeft":
                if(this.direction != "right")
                    this.direction = "left";
                break;
            case "ArrowRight":
                if(this.direction != "left")
                    this.direction = "right";
                break;
        }

        if(this.direction != lastdir)
        {
            for(let unit of this.units)
            {
                unit.move(this.direction, this.units[0].x, this.units[0].y);
            }
        }
    }

    main()
    {
        for(let unit of this.units)
        {
            unit.main();       
        }
    }

    draw()
    {
        for(let unit of this.units)
        {
            unit.draw();
        }
    }
}