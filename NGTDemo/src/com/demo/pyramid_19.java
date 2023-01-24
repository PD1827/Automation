package com.demo;

public class pyramid_19 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int rows = 5;

	    for (int i = 1; i <= rows; ++i) {
	      for (int j = 1; j <= i; ++j) {
	        System.out.print("* ");
	      }
	      System.out.println();
	    }
	    
	    
	    System.out.println("\n");
	    int rows1 = 5;

	    for (int i = rows1; i >= 1; --i) {
	      for (int j = 1; j <= i; ++j) {
	        System.out.print("* ");
	      }
	      System.out.println();
	    }
	    
	    System.out.println("\n");
	    
	    int rows2 = 5, k = 0;

	    for (int i = 1; i <= rows2; ++i, k = 0) {
	      for (int space = 1; space <= rows2 - i; ++space) {
	        System.out.print("  ");
	      }

	      while (k != 2 * i - 1) {
	        System.out.print("* ");
	        ++k;
	      }

	      System.out.println();
	    }
	    
	    
	    
	    System.out.println("\n");
	    int rows3 = 5;

	    for(int i = rows3; i >= 1; --i) {
	      for(int space = 1; space <= rows3 - i; ++space) {
	        System.out.print("  ");
	      }

	      for(int j=i; j <= 2 * i - 1; ++j) {
	        System.out.print("* ");
	      }

	      for(int j = 0; j < i - 1; ++j) {
	        System.out.print("* ");
	      }

	      System.out.println();
	    }

	}

}
