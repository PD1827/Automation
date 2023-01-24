package com.demo;

abstract class A{  
	  abstract void print();  
	}  

class B extends A
{  
	void print()
	{
		System.out.println("Hi");
	} 
  
}  

public class Abstract {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 A obj = new B();  
		 obj.print();  

	}

}
