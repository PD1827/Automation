package com.demo;

import java.util.Scanner;

public class Fibonacci {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int i,n,a,b,c;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter value:");
		
		n = sc.nextInt();
		a=0;
		b=1;
		System.out.println("Fibonacci sequence:");
		System.out.println(a);
		System.out.println(b);
		for(i=2;i<n;i++)
		{
			c=a+b;
			System.out.println(c);
			a=b;
			b=c;
		
		}

	}

}
