package com.demo;

interface shape
{
	void print(); 
}

interface show
{
	void draw(); 
}

class circle implements shape,show
{
	public void print()
	{
		System.out.println("Hi");
	}
	
	public void draw()
	{
		System.out.println("Hello");
	}
}


public class Interface {	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		circle c = new circle();
		c.print();
		c.draw();

	}

}

