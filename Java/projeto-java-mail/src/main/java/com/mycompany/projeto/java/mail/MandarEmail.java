/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projeto.java.mail;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;

public class MandarEmail {
 public static void main(String [] args){
      String to = "leonardo.gimenes@bandtec.com.br";//change accordingly
      String from = "it-gimenes@hotmail.com";//change accordingly
      String host = "10.11.112.5";//or IP address

     //Get the session object
      Properties properties = System.getProperties();
      properties.setProperty("mail.smtp.host", host);
      Session session = Session.getDefaultInstance(properties);

     //compose the message
      try{
         MimeMessage message = new MimeMessage(session);
         message.setFrom(new InternetAddress(from));
         message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
         message.setSubject("Ping");
         message.setText("Hello, this is example of sending email  ");

         // Send message
         Transport.send(message);
         System.out.println("message sent successfully....");

      }catch (MessagingException mex) {mex.printStackTrace();}
   }
}
