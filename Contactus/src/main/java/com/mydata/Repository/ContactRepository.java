package com.mydata.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mydata.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
