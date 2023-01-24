package com.demo;

import java.util.Scanner;

public class Palindrome {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String rev ="";
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter String:");
		String str = sc.nextLine();
		
//		StringBuilder rev = new StringBuilder();
//		rev.append(str);
//		rev.reverse();
		
		
		int n= str.length();
		for(int i=n-1;i>=0;i--)
		{
			rev = rev + str.charAt(i);
			
		}
		if(str.toLowerCase().equals(rev.toLowerCase()))
		{
			System.out.println("Palindrome");
		}
		else
		{
			System.out.println("not Palindrome");
		}
		
	}

}
