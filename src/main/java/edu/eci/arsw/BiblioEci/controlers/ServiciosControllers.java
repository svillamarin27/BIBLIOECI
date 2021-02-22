package edu.eci.arsw.BiblioEci.controlers;

import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import edu.eci.arsw.BiblioEci.App;

@Controller
public class ServiciosControllers {
	
	@GetMapping("/example")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "example";
    }

}
