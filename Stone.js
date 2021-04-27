class Stone{
	constructor(x,y){
		var options={
			'restitution' : 0.8,
			'fricition' : 0.9,
			'density' : 12
		}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,50,50, options);
		this.width= 70;
		this.height= 70;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("Black");
			rect(0, 0, this.width, this.height);
			pop()
	}

}