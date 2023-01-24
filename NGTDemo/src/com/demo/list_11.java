package com.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class list_11 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList languages = new ArrayList<>();

	    // Add elements in the list
	    languages.add("Java");
	    languages.add("Python");
	    languages.add("JavaScript");
	    System.out.println("ArrayList: " + languages);

	    // Create a new array of String type
	    String[] arr = new String[languages.size()];

	    // Convert ArrayList into the string array
	    languages.toArray(arr);
	    System.out.print("Array: ");
	    for(String item:arr) {
	      System.out.print(item+", ");
	    }
	    
	 

	    // convert array to list
	    List languages1= new ArrayList<>(Arrays.asList(arr));

	    System.out.println("\nList: " + languages1);

	}

}
