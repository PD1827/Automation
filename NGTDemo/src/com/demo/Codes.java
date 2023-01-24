package com.demo;

public class Codes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SubClass sb = new SubClass();
		sb.superClassmethod();
		sb.subClassmethod();
		sb.print();
		
		SuperClass sp = new SuperClass();
		sp.superClassmethod();
		((SubClass)sp).subClassmethod();

	}

}
