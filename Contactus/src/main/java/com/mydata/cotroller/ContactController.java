package com.mydata.cotroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mydata.model.Contact;
import com.mydata.service.ContactService;

@RestController
@CrossOrigin
public class ContactController {
	@Autowired
	ContactService contactService;

	@PostMapping("/savecontact")
	private Contact saveContact(@RequestBody Contact contact) {
		return contactService.savecontact(contact);

	}
}
