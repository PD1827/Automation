package com.demo;

import java.util.Arrays;

public class chartoString_7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		char[] ch = {'a', 'e', 'i', 'o', 'u'};

        //String st = String.valueOf(ch);
        String st2 = new String(ch);

        //System.out.println(st);
        System.out.println(st2);
        
        String st = "This is great";

        char[] chars = st.toCharArray();
        System.out.println(Arrays.toString(chars));

	}

}
