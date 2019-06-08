package com.ufc.main.controller;

import com.ufc.main.form.LoginForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

   @RequestMapping(value = "/login", method = RequestMethod.GET)
   public String getLogin() {
      return "login";
   }

   @RequestMapping(value = "/login", method = RequestMethod.POST)
   public String login(@ModelAttribute(name = "loginForm") LoginForm loginForm, Model model) {
      String user = loginForm.getUname();
      String pass = loginForm.getUpass();

      if ("admin".equals(user) && "admin".equals(pass)) {
         return "home";
      } else if ("user".equals(user) && "user".equals(pass)) {
         return "user";
      } else {
         model.addAttribute("invalidCredentials", true);
         return "login";
      }
   }
}
