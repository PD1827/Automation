package com.demo;

public class New {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Java Program to sort the elements of an array in descending order
		int a[]= {3,4,1,8,2};
		for(int i=0;i<5;i++)
		{
			for(int j =1;j<5;j++)
			{
				if(a[i]>a[j])
				{
					int temp = a[i];
					a[i]=a[j];
					a[j]=temp;
				}
			}
		}
		for(int i=0;i<5;i++)
		{
		System.out.println(a[i]);
		}

	}

}
