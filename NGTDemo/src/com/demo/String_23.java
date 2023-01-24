package com.demo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class String_23 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 // Format y-M-d or yyyy-MM-d
        String string = "2017-07-25";
        LocalDate date = LocalDate.parse(string, DateTimeFormatter.ISO_DATE);

        System.out.println(date);

	}

}
