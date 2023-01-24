package com.demo;

import java.util.Scanner;

public class Prime {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int i,n,count=0;
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number:");
		n = sc.nextInt(); 
		
		for(i=2;i<n-1;i++)
		{
			if(n%i==0)
			{
				count=1;
				break;
			}
		}
		if(count==0)
		{
			System.out.println(n + " is a prime number");
		}
		else
		{
			System.out.println(n + " is not a prime number");
		}

	}

}
