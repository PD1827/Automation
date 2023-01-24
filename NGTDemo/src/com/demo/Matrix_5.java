package com.demo;

public class Matrix_5 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int row =2,col=3;
		int arr1[][] = {{2,3,4},{1,2,3}};
		int arr2[][] = {{2,3,4},{1,2,3}};
		int mat[][] = new int[row][col];
		for(int i=0;i<row;i++)
		{
			for(int j=0;j<col;j++)
			{
				mat[i][j]=arr1[i][j]+arr2[i][j];
			}
		}
		System.out.println("Sum of two matrices is: ");
        for(int[] rows : mat) {
            for (int cols : rows) {
                System.out.print(cols + "    ");
            }
            System.out.println();
        }
    }

}


